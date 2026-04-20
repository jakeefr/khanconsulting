"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Client Results", href: "/client-results" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handle(e: MouseEvent | TouchEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    document.addEventListener("touchstart", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("touchstart", handle);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const glassBg = scrolled
    ? "bg-white/65 backdrop-blur-xl shadow-[0_8px_32px_rgb(0_0_0/0.08),0_1px_0_rgb(255_255_255/0.5)_inset] border-white/60"
    : "bg-transparent shadow-none border-transparent";

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 z-50 flex justify-center px-3 md:px-8"
      style={{ top: 10, maxWidth: 1280, margin: "0 auto" }}
    >
      {/* ── Desktop nav ── */}
      <nav
        className={`pointer-events-auto hidden lg:grid grid-cols-3 items-center w-full rounded-2xl text-sm font-medium border transition-all duration-300 ease-out ${glassBg}`}
      >
        <Link href="/" className="px-4 py-3 w-fit" aria-label="Khan Consulting home">
          <img
            src="/logo.png"
            alt="Khan Consulting"
            width={180}
            height={44}
            className="h-11 w-auto xl:h-12 bg-transparent"
          />
        </Link>

        <div className="flex items-center justify-self-center w-fit">
          <ul className="flex items-center">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative block px-4 py-3.5 text-sm font-medium transition duration-150 ${
                      active
                        ? "text-neutral-900"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-neutral-900/0 from-10% via-neutral-700 to-neutral-900/0 to-90% transition duration-150 ${
                        active
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                    />
                    <span className="overflow-hidden absolute inset-0 transition origin-bottom duration-150 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
                      <span className="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-neutral-500/15 to-transparent blur rounded-t-full" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center w-fit justify-self-end px-3">
          <Link
            href="/contact"
            className="liquid-glass-strong inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2"
          >
            Book a call
          </Link>
        </div>
      </nav>

      {/* ── Mobile nav bar ── */}
      <div
        className={`lg:hidden flex items-center px-5 py-2.5 w-full justify-between rounded-2xl border transition-all duration-300 ease-out ${glassBg}`}
      >
        <Link href="/" className="py-1.5" aria-label="Khan Consulting home">
          <img
            src="/logo.png"
            alt="Khan Consulting"
            width={160}
            height={40}
            className="h-9 w-auto bg-transparent"
          />
        </Link>
        <button
          type="button"
          className="size-9 rounded-lg cursor-pointer flex items-center justify-center text-neutral-800 transition-transform hover:scale-110 active:scale-95"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-full left-0 right-0 mt-2 mx-3 lg:hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgb(0_0_0/0.12)] overflow-hidden">
            <nav className="py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-6 py-4 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-neutral-900 bg-neutral-100/40"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50/40"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-5 py-4 border-t border-neutral-200/40">
              <Link
                href="/contact"
                className="liquid-glass-strong block w-full text-center px-4 py-3 text-sm font-semibold rounded-xl text-neutral-900"
                onClick={() => setMenuOpen(false)}
              >
                Book a call
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
