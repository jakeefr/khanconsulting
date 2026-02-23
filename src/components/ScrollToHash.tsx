"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * After client-side navigation to /#sectionId, scrolls the section into view.
 * Fixes hash links (e.g. Results, About) when using Next.js Link.
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const scroll = () => {
      const hash = window.location.hash?.slice(1);
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scroll();
    const t = setTimeout(scroll, 100);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
