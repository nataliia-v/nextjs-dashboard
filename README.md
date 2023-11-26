## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

##  🍀 Dynamic Data fetnching  ☘️
By default, @vercel/postgres doesn't set its own caching semantics. This allows the framework to set its own static and dynamic behavior.
Next.js API called unstable_noStore inside Server Components or data fetching functions to opt out of static rendering. Let's add this:
 Import unstable_noStore from next/cache, and call it the top of your data fetching functions in [data.ts](./app/lib/data.ts)
