"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error?: Error & { digest?: string } | null;
  reset?: () => void;
}) {
  const message =
    error?.message ?? "An error occurred loading this page.";
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-white text-neutral-900 p-6 font-sans">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-neutral-500 mb-4 max-w-md text-center">
          {message}
        </p>
        <button
          type="button"
          onClick={() => reset?.()}
          className="liquid-glass-strong px-5 py-2.5 rounded-2xl text-neutral-900 font-semibold"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
