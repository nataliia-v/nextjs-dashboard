import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation';
import Form from '@/app/(ui)/dashboard/invoices/edit-form';
import Breadcrumbs from '@/app/(ui)/dashboard/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';

type Props = {
  params: { id: string }
}

export const metadata: Metadata = {
  title: 'Edit invoice',
};

export default async function Page({ params }: Props) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
