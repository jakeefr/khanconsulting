import Link from "next/link";
import { homeMeta } from "@/content/home";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-200/80 bg-white/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center shrink-0 bg-transparent"
              aria-label="Khan Consulting home"
            >
              <img
                src="/logo.png"
                alt="Khan Consulting"
                width={160}
                height={40}
                className="h-8 w-auto md:h-9 bg-transparent"
              />
            </Link>
            <p className="mt-2 text-sm text-neutral-500 max-w-xs">
              {homeMeta.footerTagline}
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <li>
              <Link
                href="/#home"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#what-we-do"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                What we do
              </Link>
            </li>
            <li>
              <Link
                href="/#who"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Who we help
              </Link>
            </li>
            <li>
              <Link
                href="/#process"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="/#results"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Results
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Khan Consulting. All rights reserved.</p>
            <p className="mt-1 text-neutral-400">Made by <a href="https://www.wernersworks.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-200 transition-colors">WernersWorks</a></p>
          </div>
          <Link
            href="/precall"
            className="text-neutral-400 hover:text-neutral-600 transition-colors text-xs tracking-wide"
          >
            Precall
          </Link>
        </div>
      </div>
    </footer>
  );
}
