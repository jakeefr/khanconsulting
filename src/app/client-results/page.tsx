import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { CaseStudyBlock } from "@/components/CaseStudyBlock";
import {
  aggregateProof,
  caseStudies,
  clientResultsIntro,
} from "@/content/clientResults";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Contractor and service business case studies: outcomes, metrics, and stories from Khan Consulting partners.",
};

export default function ClientResultsPage() {
  const intro = clientResultsIntro;

  return (
    <>
      <Section variant="hero" className="pb-12 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {intro.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-neutral-900 leading-[1.08] tracking-tight">
              <span className="block">{intro.headlineLine1}</span>
              <span className="mt-1 block">{intro.headlineLine2}</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl">
              {intro.supporting}
            </p>
            <p className="mt-8 text-sm text-neutral-500">{intro.scrollHint}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-10 md:py-12 bg-neutral-50/90 border-y border-neutral-200/70">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-4xl">
            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight tabular-nums">
                {aggregateProof.opportunitiesBooked}
              </p>
              <p className="mt-1.5 text-xs md:text-sm text-neutral-500">
                Opportunities booked (illustrative)
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight tabular-nums">
                {aggregateProof.clientRevenue}
              </p>
              <p className="mt-1.5 text-xs md:text-sm text-neutral-500">
                Client revenue (illustrative)
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight tabular-nums">
                {aggregateProof.roi}
              </p>
              <p className="mt-1.5 text-xs md:text-sm text-neutral-500">
                ROI range (illustrative)
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-neutral-500 max-w-2xl">
            Figures shown are placeholders for layout; we’ll tailor targets and reporting to your market and offer.
          </p>
        </Container>
      </Section>

      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-14 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
              Selected stories
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Each row pairs narrative results with a video slot for a future client testimonial or walkthrough.
            </p>
          </div>

          <div>
            {caseStudies.map((study, i) => (
              <div
                key={study.id}
                className={
                  i > 0
                    ? "mt-20 md:mt-24 pt-20 md:pt-24 border-t border-neutral-200/70"
                    : ""
                }
              >
                <CaseStudyBlock study={study} videoOnLeft={i % 2 === 0} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16 md:py-20 bg-neutral-50/80 border-t border-neutral-200/70">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
              Want to see what this could look like for your business?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Book an intro call—we’ll map your market, offer, and numbers without the fluff.
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
