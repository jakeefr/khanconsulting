"use client";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "media-id"?: string;
        aspect?: string;
      };
    }
  }
}

type WistiaVideoEmbedProps = {
  mediaId: string;
  /** When provided, uses the <wistia-player> web component with the given aspect ratio
   *  instead of the standard iframe embed. e.g. "1.889763779527559" */
  aspect?: string;
};

export function WistiaVideoEmbed({ mediaId, aspect }: WistiaVideoEmbedProps) {
  useEffect(() => {
    if (!aspect) return;

    const addScript = (src: string, isModule?: boolean) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const el = document.createElement("script");
      el.src = src;
      el.async = true;
      if (isModule) el.type = "module";
      document.head.appendChild(el);
    };

    addScript("https://fast.wistia.com/player.js");
    addScript(`https://fast.wistia.com/embed/${mediaId}.js`, true);
  }, [mediaId, aspect]);

  if (aspect) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-[0_1px_0_rgb(0_0_0/0.04)]">
        <style>{`
          wistia-player[media-id='${mediaId}']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
            display: block;
            filter: blur(5px);
            padding-top: ${(1 / parseFloat(aspect)) * 100}%;
          }
        `}</style>
        <wistia-player
          media-id={mediaId}
          aspect={aspect}
          style={{ display: "block", width: "100%" }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-[0_1px_0_rgb(0_0_0/0.04)]">
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${mediaId}`}
        title="Video"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full aspect-video"
        style={{ border: 0 }}
      />
    </div>
  );
}
