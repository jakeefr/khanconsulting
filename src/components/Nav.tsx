"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import GooeyNav from "@/components/reactbits/GooeyNav";

const gooeyItems = [
  { label: "Home", href: "/" },
  { label: "What we do", href: "/#what-we-do" },
  { label: "Process", href: "/#process" },
  { label: "Results", href: "/#results" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Offer", href: "/#what-we-do" },
  { label: "Who", href: "/#who" },
  { label: "Process", href: "/#process" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/#faq" },
];

function useHash() {
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const read = () =>
      setHash(typeof window !== "undefined" ? window.location.hash.slice(1) : "");
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  return hash;
}

function activeIndexFor(hash: string, pathname: string): number {
  if (pathname === "/contact") return 4;
  if (pathname === "/about") return 2;
  if (pathname === "/results") return 3;
  if (pathname !== "/") return 0;

  if (hash === "results") return 3;
  if (hash === "what-we-do") return 1;
  if (hash === "process" || hash === "about") return 2;
  return 0;
}

export function Nav() {
  const pathname = usePathname();
  const hash = useHash();
  const activeIndex = activeIndexFor(hash, pathname);

  return (
    <header
      className="sticky top-0 z-50 bg-white/80 border-b border-neutral-200/80 backdrop-blur-xl shadow-[0_1px_0_rgb(0_0_0/0.04)]"
      style={
        {
          "--color-1": "#a3a3a3",
          "--color-2": "#737373",
          "--color-3": "#525252",
          "--color-4": "#e5e5e5",
        } as React.CSSProperties
      }
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 md:py-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center shrink-0 bg-transparent"
          aria-label="Khan Consulting home"
        >
          <img
            src="/logo.png"
            alt="Khan Consulting"
            width={160}
            height={40}
            className="h-9 w-auto md:h-10 bg-transparent"
          />
        </Link>

        <div className="hidden lg:flex items-center flex-1 justify-center min-w-0 px-4">
          <GooeyNav items={gooeyItems} activeIndex={activeIndex} syncHashOnClick />
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 text-sm font-semibold rounded-xl bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Book a call
          </Link>
        </div>

        <div className="flex lg:hidden w-full justify-center gap-1 overflow-x-auto pb-1 -mx-1 px-1">
          {mobileLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-100/90 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-900 hover:bg-neutral-100/90 rounded-full transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
