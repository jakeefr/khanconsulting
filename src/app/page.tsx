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
                  animationSpeed={7}
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={h2}>What we do</h2>
            <p className={`${intro} mt-3 mx-auto`}>{homeMeta.whatWeDoIntro}</p>
          </div>
          <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {homeMeta.pillars.map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-200/60 bg-white px-6 py-7 text-center shadow-surface"
              >
                <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                  {p.subtitle}
                </p>
                <h3 className="mt-2 text-lg md:text-xl font-semibold text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-neutral-600 leading-relaxed text-[15px] md:text-base">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="who" className="border-t border-neutral-200/70">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={h2}>Who we help</h2>
            <p className={`${intro} mt-3 mx-auto`}>{homeMeta.whoIntro}</p>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {homeMeta.whoNiches.map((niche) => (
              <li
                key={niche}
                className="w-full sm:w-[calc(50%-5px)] lg:w-[calc(33.333%-7px)] rounded-xl border border-neutral-200/70 bg-white px-5 py-4 text-[14px] font-semibold text-neutral-800 tracking-tight text-center shadow-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-surface-md hover:border-neutral-300/80"
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={h2}>{homeMeta.resultsTitle}</h2>
            <p className={`${intro} mt-3 mx-auto`}>{homeMeta.resultsSupport}</p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={h2}>{homeMeta.faqTitle}</h2>
            <p className={`${intro} mt-3 mx-auto`}>{homeMeta.faqIntro}</p>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <Section id="contact" className="border-t border-neutral-200/80 py-24 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className={h2}>{homeMeta.bookTitle}</h2>
            <p className={`${intro} mt-4 mx-auto`}>{homeMeta.bookSupport}</p>
            <div className="mt-10 flex justify-center">
              <ul className="text-left space-y-4 text-[15px] text-neutral-600 w-full max-w-sm">
                {homeMeta.bookBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg aria-hidden="true" className="mt-[3px] h-4 w-4 shrink-0 text-neutral-500" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <CTAButton href="/contact" size="lg">
                {homeMeta.bookCta}
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
