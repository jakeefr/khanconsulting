import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center shrink-0 bg-transparent" aria-label="Khan Consulting home">
              <img
                src="/logo.png"
                alt="Khan Consulting"
                width={160}
                height={40}
                className="h-8 w-auto md:h-9 bg-transparent"
              />
            </Link>
            <p className="mt-1 text-sm text-gray-500">
              Paid acquisition + custom AI systems.
            </p>
          </div>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="#home"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#results"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Results
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Khan Consulting. All rights reserved.
          <p className="mt-1.5 text-gray-500">Made by WernersWorks</p>
        </div>
      </div>
    </footer>
  );
}
