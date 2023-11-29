'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(), /* Amount field is specifically set to coerce (change) from a string to a number while also validating its type. */
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function createInvoice(formData: FormData) {
 const { customerId, amount, status } = CreateInvoice.parse({ /* Pass rawFormData to CreateInvoice to validate the types */
    customerId: formData.get('customerId'), /* If form has many fields use: const rawFormData = Object.fromEntries(formData.entries())  */
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100; /* It's usually good practice to store monetary values in cents in your database to eliminate JavaScript floating-point errors and ensure greater accuracy. */
  const date = new Date().toISOString().split('T')[0]; /* Create a new date with the format "YYYY-MM-DD" for the invoice's creation date */

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  revalidatePath('/dashboard/invoices'); /* Once the database has been updated, the /dashboard/invoices path will be revalidated, and fresh data will be fetched from the server. */
  redirect('/dashboard/invoices');
};