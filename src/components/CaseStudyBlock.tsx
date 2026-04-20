import { CaseStudyVideoSlot } from "@/components/CaseStudyVideoSlot";
import { WistiaVideoEmbed } from "@/components/WistiaVideoEmbed";
import type { ClientCaseStudy } from "@/content/clientResults";

export function CaseStudyBlock({
  study,
  videoOnLeft,
}: {
  study: ClientCaseStudy;
  videoOnLeft: boolean;
}) {
  const detail = (
    <div className="flex flex-col justify-center min-w-0">
      <div className="liquid-glass rounded-xl px-4 py-4 sm:px-5 sm:py-5 w-fit">
        <div className="flex items-start gap-8 sm:gap-10">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight tabular-nums">
                {m.value}
              </p>
              <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-500 leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-7 text-sm font-medium text-neutral-900">
        {study.clientName}
        <span className="mx-1.5 text-neutral-400" aria-hidden>
          —
        </span>
        <span className="font-normal text-neutral-500">
          {study.companyAndTrade}
        </span>
      </p>

      <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed max-w-lg">
        {study.summary}
      </p>

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
