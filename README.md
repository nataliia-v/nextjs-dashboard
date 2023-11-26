## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

##  🍀 Dynamic Data fetnching  ☘️
By default, @vercel/postgres doesn't set its own caching semantics. This allows the framework to set its own static and dynamic behavior.
Next.js API called unstable_noStore inside Server Components or data fetching functions to opt out of static rendering. Let's add this:
 Import unstable_noStore from next/cache, and call it the top of your data fetching functions in [data.ts](./app/lib/data.ts)

 ##  🍀 Implement Streaming  ☘️
 Streaming works well with React's component model, as each component can be considered a chunk.
 There are two ways you implement streaming in Next.js:
 1. At the page level, with the loading.tsx file.
 2. For specific components, with <Suspense>.

 ### Streaming a whole page with [loading.tsx](./app/ui/dashboard/(overview)/loading.tsx)
In the /app/dashboard folder, create a new file called [loading.tsx](./app/ui/dashboard/(overview)/loading.tsx).
[loading.tsx](./app/ui/dashboard/(overview)/loading.tsx) is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.

### Adding loading skeletons 
A loading skeleton is a simplified version of the UI. Many websites use them as a placeholder (or fallback) to indicate to users that the content is loading. Any UI you embed into [loading.tsx](./app/ui/dashboard/(overview)/loading.tsx)  will be embedded as part of the static file, and sent first. Then, the rest of the dynamic content will be streamed from the server to the client.