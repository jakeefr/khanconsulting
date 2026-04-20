"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center">
      <h1 className="text-xl font-bold text-neutral-900 mb-2">Something went wrong</h1>
      <p className="text-neutral-500 mb-6 max-w-md">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="liquid-glass-strong px-5 py-2.5 rounded-2xl text-neutral-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
