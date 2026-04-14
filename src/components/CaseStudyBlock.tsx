import { CaseStudyVideoSlot } from "@/components/CaseStudyVideoSlot";
import type { ClientCaseStudy } from "@/content/clientResults";

/**
 * Shared case-study row used on both /client-results and /precall.
 * Update once here — both pages reflect the change automatically.
 */
export function CaseStudyBlock({
  study,
  videoOnLeft,
}: {
  study: ClientCaseStudy;
  videoOnLeft: boolean;
}) {
  const detail = (
    <div className="flex flex-col justify-center min-w-0">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {study.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-neutral-200/90 bg-white/80 px-3 py-3 sm:px-4 sm:py-3.5"
          >
            <p className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight tabular-nums">
              {m.value}
            </p>
            <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 leading-snug">
              {m.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-neutral-800">
        <span className="font-medium text-neutral-900">{study.clientName}</span>
        <span className="text-neutral-400 mx-2" aria-hidden>
          ·
        </span>
        <span className="text-neutral-600">{study.companyAndTrade}</span>
      </p>
      <p className="mt-3 text-base text-neutral-600 leading-relaxed max-w-xl">
        {study.summary}
      </p>
      <blockquote className="mt-6 border-l-2 border-neutral-300 pl-5 text-neutral-800 leading-relaxed max-w-xl">
        <p className="text-[15px] md:text-base italic">&ldquo;{study.quote}&rdquo;</p>
      </blockquote>
    </div>
  );

  const media = (
    <div className="min-w-0">
      {/*
        Future embed example:
        <CaseStudyVideoSlot label={`${study.clientName} story`}>
          <iframe className="absolute inset-0 h-full w-full" src="..." title="..." />
        </CaseStudyVideoSlot>
      */}
      <CaseStudyVideoSlot label={`${study.clientName} — video story`} />
    </div>
  );

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
      {videoOnLeft ? (
        <>
          {media}
          {detail}
        </>
      ) : (
        <>
          <div className="lg:col-start-2 lg:row-start-1">{detail}</div>
          <div className="lg:col-start-1 lg:row-start-1">{media}</div>
        </>
      )}
    </article>
  );
}
