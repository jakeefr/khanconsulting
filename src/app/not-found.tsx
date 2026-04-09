import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
        404 — Page not found
      </h1>
      <p className="text-neutral-500 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or the URL may have changed.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-2xl bg-neutral-900 border border-neutral-900 text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-2xl bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
