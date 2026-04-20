"use client";

import { useEffect } from "react";

// Teach TypeScript about the Wistia custom element (merged with precall declaration if both load)
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

type WistiaVideoEmbedProps = {
  /** Wistia media ID, e.g. "r7miiklxcu" */
  mediaId: string;
};

/**
 * Generic Wistia inline embed.
 * Injects player.js and the per-media module script once; duplicate-injection guarded.
 * Preserves the same outer container style as CaseStudyVideoSlot.
 */
export function WistiaVideoEmbed({ mediaId }: WistiaVideoEmbedProps) {
  useEffect(() => {
    const playerSrc = "https://fast.wistia.com/player.js";
    const embedSrc = `https://fast.wistia.com/embed/${mediaId}.js`;

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
  }, [mediaId]);

  const swatchUrl = `https://fast.wistia.com/embed/medias/${mediaId}/swatch`;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-[0_1px_0_rgb(0_0_0/0.04)]">
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('${swatchUrl}');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      <wistia-player
        media-id={mediaId}
        aspect="1.7777777777777777"
        style={{ display: "block", width: "100%" }}
      />
    </div>
  );
}
