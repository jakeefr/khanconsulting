import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { CaseStudyBlock } from "@/components/CaseStudyBlock";
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
      <Section variant="hero" className="pb-14 md:pb-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {intro.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] tracking-tight">
              <span className="block text-neutral-900">{intro.headlineLine1}</span>
              <span className="block text-neutral-400">{intro.headlineLine2}</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-xl">
              {intro.supporting}
            </p>
            <p className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
              {intro.scrollHint}
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Case studies ── */}
      <Section className="pt-2 pb-20 md:pb-28">
        <Container>
          {/* Section header */}
          <div className="max-w-xl mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
              Client results
            </h2>
            <p className="mt-3 text-[15px] text-neutral-500 leading-relaxed">
              Real examples of contractors using stronger acquisition and
              follow-up systems to create more consistent work.
            </p>
          </div>

          {/* Stories */}
          <div>
            {caseStudies.map((study, i) => (
              <div
                key={study.id}
                className={
                  i > 0
                    ? "mt-16 md:mt-20 pt-16 md:pt-20 border-t border-neutral-200/60"
                    : ""
                }
              >
                <CaseStudyBlock study={study} videoOnLeft={i % 2 === 0} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Closing CTA ── */}
      <Section className="py-16 md:py-20 bg-neutral-50/80 border-t border-neutral-200/70">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
              Want to see what this could look like for your business?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Book an intro call — we&rsquo;ll map your market, offer, and
              numbers without the fluff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <CTAButton href="/contact" size="lg">
                Book an intro call
              </CTAButton>
              <CTAButton href="/" size="lg" variant="secondary">
                Back to home
              </CTAButton>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Prefer email?{" "}
              <Link
                href="/contact"
                className="font-medium text-neutral-800 underline-offset-4 hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
