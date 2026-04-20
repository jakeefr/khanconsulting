import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { CaseStudyBlock } from "@/components/CaseStudyBlock";
import { FadeIn } from "@/components/FadeIn";
import { caseStudies, clientResultsIntro } from "@/content/clientResults";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Contractor and service business case studies: outcomes, metrics, and stories from Khan Consulting partners.",
};

export default function ClientResultsPage() {
  const intro = clientResultsIntro;

  return (
    <>
      {/* ── Hero ── */}
      <Section variant="hero" className="pt-40 md:pt-56 pb-14 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                {intro.eyebrow}
              </p>
            </FadeIn>
            <FadeIn>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-neutral-900 leading-[1.08] tracking-tight">
                <span className="block">{intro.headlineLine1}</span>
                <span className="mt-1 block text-neutral-400">{intro.headlineLine2}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl">
                {intro.supporting}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-8 text-sm text-neutral-500">{intro.scrollHint}</p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Case studies ── */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-14 md:mb-16">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                Client results
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-3 text-[15px] text-neutral-500 leading-relaxed">
                Real examples of contractors using stronger acquisition and
                follow-up systems to create more consistent work.
              </p>
            </FadeIn>
          </div>

          {/* Stories */}
          <div>
            {caseStudies.map((study, i) => (
              <FadeIn key={study.id} delay={i * 0.1}>
                <div
                  className={
                    i > 0
                      ? "mt-20 md:mt-24 pt-20 md:pt-24 border-t border-neutral-200/70"
                      : ""
                  }
                >
                  <CaseStudyBlock study={study} videoOnLeft={i % 2 === 0} />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Closing CTA ── */}
      <Section className="py-16 md:py-20 bg-neutral-50/80 border-t border-neutral-200/70">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                Want to see what this could look like for your business?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-lg text-neutral-600">
                Book an intro call&mdash;we&apos;ll map your market, offer, and numbers without the fluff.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <CTAButton href="/contact" size="lg">
                  Book an intro call
                </CTAButton>
                <CTAButton href="/" size="lg" variant="secondary">
                  Back to home
                </CTAButton>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="mt-6 text-sm text-neutral-500">
                Prefer email?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-neutral-800 underline-offset-4 hover:underline"
                >
                  Contact us
                </Link>
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
