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
      <body className="min-h-screen flex flex-col items-center justify-center bg-[#0b1b33] text-white p-6 font-sans">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-gray-400 mb-4 max-w-md text-center">
          {message}
        </p>
        <button
          type="button"
          onClick={() => reset?.()}
          className="px-5 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
