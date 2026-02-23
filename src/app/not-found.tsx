import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
        404 — Page not found
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or the URL may have changed.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white hover:bg-white/15 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white hover:bg-white/15 transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
