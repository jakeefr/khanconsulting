"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Map legacy hash targets to current section ids (bookmark compatibility). */
function resolveSectionId(raw: string): string {
  if (raw === "about") return "process";
  return raw;
}

/**
 * After client-side navigation to /#sectionId, scrolls the section into view.
 * Fixes hash links when using Next.js Link.
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const scroll = () => {
      const raw = window.location.hash?.slice(1);
      if (!raw) return;
      const id = resolveSectionId(raw);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scroll();
    const t = setTimeout(scroll, 100);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
