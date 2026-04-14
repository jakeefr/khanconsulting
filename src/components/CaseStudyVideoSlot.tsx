import type { ReactNode } from "react";
import { LuPlay } from "react-icons/lu";

type CaseStudyVideoSlotProps = {
  /** When ready: render your iframe or video element as children and remove the placeholder overlay. */
  children?: ReactNode;
  /** Accessible label for the media region */
  label: string;
};

/**
 * Premium placeholder for future Loom / Vimeo / YouTube / custom embeds.
 * Replace `children` with your embed, or keep children empty and swap this component’s inner markup.
 */
export function CaseStudyVideoSlot({ children, label }: CaseStudyVideoSlotProps) {
  if (children) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-[0_1px_0_rgb(0_0_0/0.04)]">
        <div className="relative aspect-video w-full">{children}</div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 shadow-[0_1px_0_rgb(0_0_0/0.04)]"
      aria-label={label}
    >
      <div className="relative aspect-video w-full">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgb(255 255 255 / 0.9), transparent 55%), radial-gradient(circle at 70% 80%, rgb(163 163 163 / 0.2), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300/80 bg-white/90 text-neutral-700 shadow-sm"
            aria-hidden
          >
            <LuPlay className="h-6 w-6 translate-x-0.5" strokeWidth={2} />
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Video placeholder
          </p>
          <p className="max-w-[18rem] text-sm text-neutral-600 leading-snug">
            Embed Loom, Vimeo, or YouTube here when your testimonial clip is ready.
          </p>
        </div>
      </div>
    </div>
  );
}
