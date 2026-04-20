"use client";

import { useEffect } from "react";

// Teach TypeScript about the Wistia custom element
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "media-id"?: string;
          aspect?: string;
        },
        HTMLElement
      >;
    }
  }
}

/**
 * Wistia inline embed for the Precall page.
 * Scripts are injected once into <head>; duplicate-injection is guarded.
 */
export function WistiaPrecallEmbed() {
  useEffect(() => {
    const playerSrc = "https://fast.wistia.com/player.js";
    const embedSrc = "https://fast.wistia.com/embed/zuf4enc2kl.js";

    if (!document.querySelector(`script[src="${playerSrc}"]`)) {
      const s = document.createElement("script");
      s.src = playerSrc;
      s.async = true;
      document.head.appendChild(s);
    }

    if (!document.querySelector(`script[src="${embedSrc}"]`)) {
      const s = document.createElement("script");
      s.src = embedSrc;
      s.async = true;
      s.type = "module";
      document.head.appendChild(s);
    }
  }, []);

  return (
    /* Preserve the existing large rounded white video container style */
    <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-[0_1px_0_rgb(0_0_0/0.04)]">
      {/* Loading-state swatch shown until the custom element is defined */}
      <style>{`
        wistia-player[media-id='zuf4enc2kl']:not(:defined) {
          background: center / contain no-repeat
            url('https://fast.wistia.com/embed/medias/zuf4enc2kl/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>

      {/*
        The wistia-player element manages its own 16/9 aspect ratio via the
        `aspect` attribute — no extra wrapper div needed.
      */}
      <wistia-player
        media-id="zuf4enc2kl"
        aspect="1.7777777777777777"
        style={{ display: "block", width: "100%" }}
      />
    </div>
  );
}
