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
          className="liquid-glass-strong inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-2xl text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="liquid-glass inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-2xl text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 focus-visible:ring-offset-2"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
