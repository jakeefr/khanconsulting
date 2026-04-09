import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { MetricCard } from "@/components/MetricCard";
import { StepRow } from "@/components/StepRow";
import { FAQAccordion } from "@/components/FAQAccordion";
import GradientText from "@/components/GradientTextClient";
import { gradientTextHero } from "@/theme/colors";
import { homeMeta } from "@/content/home";

const h2 = "text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight";
const intro = "mt-4 text-base md:text-[17px] text-neutral-600 leading-relaxed max-w-2xl";

export default function HomePage() {
  const faqItems = homeMeta.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <Section id="home" variant="hero">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-3">
              {homeMeta.heroKicker}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-tight">
              <span className="block text-neutral-900">{homeMeta.heroLine1}</span>
              <span className="mt-3 md:mt-4 block text-4xl md:text-5xl lg:text-[3.25rem]">
                <GradientText
                  colors={gradientTextHero}
                  animationSpeed={14}
                  showBorder={false}
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold"
                >
                  {homeMeta.heroGradientLine}
                </GradientText>
              </span>
            </h1>
            <p className={`${intro} mx-auto mt-6`}>{homeMeta.heroSupport}</p>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 max-w-xl mx-auto">
              {homeMeta.trustNote}
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <CTAButton href="/contact" size="lg">
                {homeMeta.heroCtaPrimary}
              </CTAButton>
              <CTAButton href="/#process" size="lg" variant="secondary">
                {homeMeta.heroCtaSecondary}
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="what-we-do" variant="tight" className="border-t border-neutral-200/70 bg-white/40">
        <Container>
          <div className="max-w-3xl">
            <h2 className={h2}>What we do</h2>
            <p className={`${intro} mt-3`}>{homeMeta.whatWeDoIntro}</p>
          </div>
          <div className="mt-12 md:mt-14 max-w-4xl space-y-10 md:space-y-12">
            {homeMeta.pillars.map((p, i) => (
              <div
                key={i}
                className="border-l-2 border-neutral-900/20 pl-5 md:pl-6"
              >
                <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                  {p.subtitle}
                </p>
                <h3 className="mt-1.5 text-lg md:text-xl font-semibold text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-neutral-600 leading-relaxed text-[15px] md:text-base">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="who" className="border-t border-neutral-200/70">
        <Container>
          <div className="max-w-3xl">
            <h2 className={h2}>Who we help</h2>
            <p className={`${intro} mt-3`}>{homeMeta.whoIntro}</p>
          </div>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl">
            {homeMeta.whoNiches.map((niche) => (
              <li
                key={niche}
                className="rounded-lg border border-neutral-200/60 bg-white/60 px-4 py-3 text-sm text-neutral-700"
              >
                {niche}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="process" className="border-t border-neutral-200/70 bg-neutral-50/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
            <h2 className={h2}>How it works</h2>
            <p className={`${intro} mt-3 mx-auto md:mx-0`}>
              {homeMeta.processIntro}
            </p>
          </div>
          <div className="mt-4 max-w-3xl mx-auto md:mx-0 md:max-w-4xl">
            {homeMeta.processSteps.map((item) => (
              <StepRow
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="results" className="border-t border-neutral-200/70">
        <Container>
          <div className="max-w-3xl">
            <h2 className={h2}>{homeMeta.resultsTitle}</h2>
            <p className={`${intro} mt-3`}>{homeMeta.resultsSupport}</p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl">
            {homeMeta.resultsMetrics.map((m) => (
              <MetricCard
                key={m.label}
                value={m.value}
                label={m.label}
                sublabel={m.sublabel}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="faq" variant="tight" className="border-t border-neutral-200/70 bg-white/35">
        <Container>
          <div className="max-w-3xl">
            <h2 className={h2}>{homeMeta.faqTitle}</h2>
            <p className={`${intro} mt-3`}>{homeMeta.faqIntro}</p>
          </div>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <Section id="contact" variant="tight" className="border-t border-neutral-200/80 pb-20 md:pb-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className={h2}>{homeMeta.bookTitle}</h2>
            <p className={`${intro} mt-4 mx-auto`}>{homeMeta.bookSupport}</p>
            <ul className="mt-8 text-left space-y-3 text-[15px] text-neutral-600 max-w-md mx-auto">
              {homeMeta.bookBullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-neutral-400 shrink-0">—</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton href="/contact" size="lg">
                {homeMeta.bookCta}
              </CTAButton>
            </div>
            <div className="mt-16 pt-12 border-t border-neutral-200/70">
              <h3 className="text-xl font-semibold text-neutral-900">
                {homeMeta.finalCtaTitle}
              </h3>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                {homeMeta.finalCtaSupport}
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {homeMeta.finalCtaLabel}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
