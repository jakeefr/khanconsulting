import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { WistiaPrecallEmbed } from "@/components/WistiaPrecallEmbed";
import { CaseStudyBlock } from "@/components/CaseStudyBlock";
import { FadeIn } from "@/components/FadeIn";
import { caseStudies } from "@/content/clientResults";
import { LuArrowDown, LuCheck } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Before Your Call — Khan Consulting",
  description:
    "A short overview to review before your intro call with Khan Consulting.",
  robots: { index: false, follow: false },
};

const prepSteps = [
  "Watch the overview above — it covers the core of how we work",
  "Think through your current lead flow: where jobs come from, and where things stall",
  "Note any gaps in follow-up, booking, or reporting you want to address",
];

export default function PrecallPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section variant="hero" className="pb-10 md:pb-14">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Before your call
              </p>
            </FadeIn>
            <FadeIn>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-neutral-900 leading-[1.08] tracking-tight">
                Watch this before we talk.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
                A short overview of how the system works, so we can use our time
                on the call to focus on your specific situation.
              </p>
            </FadeIn>
          </div>

          {/* ── Precall video embed ── */}
          <FadeIn delay={0.2} className="mt-10 md:mt-12 max-w-4xl mx-auto">
            <WistiaPrecallEmbed />
          </FadeIn>
        </Container>
      </Section>

      {/* ── Prep checklist ── */}
      <Section className="py-10 md:py-12 bg-white/25 backdrop-blur-xl border-y border-neutral-200/70">
        <Container>
          <div className="max-w-xl mx-auto">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 mb-5">
                Before the call
              </p>
            </FadeIn>
            <ul className="space-y-3">
              {prepSteps.map((step, i) => (
                <FadeIn key={step} as="li" delay={i * 0.08} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-md text-neutral-600 shadow-sm">
                    <LuCheck className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-neutral-600 leading-snug">{step}</span>
                </FadeIn>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ── Transition prompt ── */}
      <FadeIn className="py-14 md:py-16 flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-sm font-medium text-neutral-500 tracking-wide">
          How this looks for real contractors
        </p>
        <LuArrowDown
          className="h-5 w-5 text-neutral-400 animate-bounce"
          strokeWidth={1.5}
          aria-hidden
        />
      </FadeIn>

      {/* ── Case studies ── */}
      <Section className="pt-0 pb-16 md:pb-24">
        <Container>
          <div className="max-w-2xl mb-14 md:mb-16">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                Client outcomes
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                A sample of what the growth system has produced for contractors
                across different trades and markets.
              </p>
            </FadeIn>
          </div>

          <div>
            {caseStudies.map((study, i) => (
              <FadeIn
                key={study.id}
                delay={i * 0.08}
                className={
                  i > 0
                    ? "mt-20 md:mt-24 pt-20 md:pt-24 border-t border-neutral-200/70"
                    : ""
                }
              >
                <CaseStudyBlock study={study} videoOnLeft={i % 2 === 0} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Closing CTA ── */}
      <Section className="py-14 md:py-20 bg-neutral-50/80 border-t border-neutral-200/70">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4">
                Your call is confirmed
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                We&apos;ll see you on the call.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-neutral-600 leading-relaxed max-w-md mx-auto">
                If anything comes up beforehand or you have questions in advance,
                reach out directly.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <CTAButton href="/contact" size="lg" variant="secondary">
                  Send a message
                </CTAButton>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
