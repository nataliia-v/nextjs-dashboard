import type { NextAuthConfig } from 'next-auth';
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

/* 
Logic to protect routes. This will prevent users from accessing the dashboard pages unless they are logged in.
*/
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: { 
    /* 
    The authorized callback is used to verify if the request is authorized to access a page via Next.js Middleware.
    It is called before a request is completed, and it receives an object with the auth and request properties.
    The auth property contains the user's session, and the request property contains the incoming request.
    */
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [
    GitHub,
    Google,
  ], // Add providers with an empty array for now
} satisfies NextAuthConfig;