import { CaseStudyVideoSlot } from "@/components/CaseStudyVideoSlot";
import { WistiaVideoEmbed } from "@/components/WistiaVideoEmbed";
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
      {/* Minimal stat row — large number, small gray label, no heavy cards */}
      <div className="flex items-start gap-8 sm:gap-10">
        {study.metrics.map((m) => (
          <div key={m.label} className="shrink-0">
            <p className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight tabular-nums leading-none">
              {m.value}
            </p>
            <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-500 leading-snug">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Name — Company */}
      <p className="mt-7 text-sm font-medium text-neutral-900">
        {study.clientName}
        <span className="mx-1.5 text-neutral-400" aria-hidden>
          —
        </span>
        <span className="font-normal text-neutral-500">
          {study.companyAndTrade}
        </span>
      </p>

      {/* Summary */}
      <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed max-w-lg">
        {study.summary}
      </p>

      {/* Quote */}
      <blockquote className="mt-6 border-l-2 border-neutral-200 pl-4 max-w-lg">
        <p className="text-[15px] md:text-base text-neutral-700 italic leading-relaxed">
          &ldquo;{study.quote}&rdquo;
        </p>
        {study.quoteAttribution && (
          <p className="mt-2 text-xs text-neutral-400 not-italic">
            {study.quoteAttribution}
          </p>
        )}
      </blockquote>
    </div>
  );

  const media = (
    <div className="min-w-0">
      {study.wistiaId ? (
        <WistiaVideoEmbed mediaId={study.wistiaId} />
      ) : (
        <CaseStudyVideoSlot label={`${study.clientName} — video story`} />
      )}
    </div>
  );

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-center">
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
