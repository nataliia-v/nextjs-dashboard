'use client';  /* error.tsx needs to be a Client Component. */
 
import Error from '@/app/(ui)/error';
 
export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Error error={error} reset={reset}/>
  );
}