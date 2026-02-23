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
      <h1 className="text-xl font-bold text-white mb-2">Something went wrong</h1>
      <p className="text-gray-400 mb-6 max-w-md">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
