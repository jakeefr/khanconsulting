"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import GooeyNav from "@/components/reactbits/GooeyNav";

const gooeyItems = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/#results" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

function useHash() {
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const read = () => setHash(typeof window !== "undefined" ? window.location.hash.slice(1) : "");
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  return hash;
}

export function Nav() {
  const pathname = usePathname();
  const hash = useHash();

  const activeIndexFromHash =
    pathname === "/"
      ? hash === "results"
        ? 1
        : hash === "about"
          ? 2
          : hash === "contact"
            ? 3
            : 0
      : 0;

  const activeIndexFromPath =
    pathname === "/contact" ? 3 : pathname === "/about" ? 2 : pathname === "/results" ? 1 : null;

  const activeIndex =
    activeIndexFromPath !== null ? activeIndexFromPath : activeIndexFromHash;

  return (
    <header
      className="sticky top-0 z-50 bg-white/5 border-b border-white/10 backdrop-blur-xl shadow-lg shadow-black/10"
      style={
        {
          "--color-1": "#38bdf8",
          "--color-2": "#172d4a",
          "--color-3": "#0f2747",
          "--color-4": "#ffffff",
        } as React.CSSProperties
      }
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
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
            className="h-10 w-auto md:h-11 bg-transparent"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <GooeyNav items={gooeyItems} activeIndex={activeIndex} syncHashOnClick />
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 text-white hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
