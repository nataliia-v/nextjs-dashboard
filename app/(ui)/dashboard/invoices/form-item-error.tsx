export function FormItemError({ error }: { error: string } ) {
  return (
  <p className="mt-2 text-sm text-red-500" key={error}>
    {error}
  </p>
  );
}