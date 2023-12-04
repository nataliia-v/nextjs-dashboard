## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## 🍀 Dynamic Data fetnching ☘️

By default, @vercel/postgres doesn't set its own caching semantics. This allows the framework to set its own static and dynamic behavior.
Next.js API called unstable_noStore inside Server Components or data fetching functions to opt out of static rendering. Let's add this:
Import unstable_noStore from next/cache, and call it the top of your data fetching functions in [data.ts](./app/lib/data.ts)

## 🍀 Implement Streaming ☘️

Streaming works well with React's component model, as each component can be considered a chunk.
There are two ways you implement streaming in Next.js:

1.  At the page level, with the loading.tsx file.
2.  For specific components, with <Suspense>.

### Streaming a whole page with [loading.tsx](<./app/(ui)/dashboard/(overview)/loading.tsx>)

In the /app/dashboard folder, create a new file called [loading.tsx](<./app/(ui)/dashboard/(overview)/loading.tsx>).
[loading.tsx](<./app/(ui)/dashboard/(overview)/loading.tsx>) is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.

### Adding loading skeletons

A loading skeleton is a simplified version of the UI. Many websites use them as a placeholder (or fallback) to indicate to users that the content is loading. Any UI you embed into [loading.tsx](<./app/(ui)/dashboard/(overview)/loading.tsx>) will be embedded as part of the static file, and sent first. Then, the rest of the dynamic content will be streamed from the server to the client.

## 🍀 Mutating data

### Create a Server Action

React Server Actions allow you to run asynchronous code directly on the server. They eliminate the need to create API endpoints to mutate your data. Instead, you write asynchronous functions that execute on the server and can be invoked from your Client or Server Components.

#### Using forms with Server Actions (create [actions.ts](./app/lib/actions.ts))

Server Actions are also deeply integrated with Next.js caching. When a form is submitted through a Server Action, not only can you use the action to mutate data, but you can also revalidate the associated cache using APIs like revalidatePath and revalidateTag.

##### Form validation

To handle type validation, I'll use Zod, a TypeScript-first validation library.
In [actions.ts](./app/lib/actions.ts) file, imported Zod and defined a schema that matches the shape of form object. This schema will validate the formData before saving it to a database.

## 🍀 Handling errors

For example Error component for invoices:
[error.tsx](<./app/(ui)/dashboard/invoices/error.tsx>) needs to be a Client Component.
Error Component accepts two props:
error: This object is an instance of JavaScript's native Error object.
reset: This is a function to reset the error boundary. When executed, the function will try to re-render the route segment.
