import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { MetricCard } from "@/components/MetricCard";
import { StepRow } from "@/components/StepRow";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FadeIn } from "@/components/FadeIn";
import GradientText from "@/components/GradientTextClient";
import { gradientTextHero } from "@/theme/colors";
import { homeMeta } from "@/content/home";
import type { IconType } from "react-icons";
import {
  LuBriefcase,
  LuBuilding2,
  LuDroplet,
  LuHammer,
  LuHardHat,
  LuHouse,
  LuLayers,
  LuShieldAlert,
  LuSnowflake,
  LuTreePine,
  LuZap,
} from "react-icons/lu";

const h2 = "text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight";
const intro = "mt-4 text-base md:text-[17px] text-neutral-600 leading-relaxed max-w-2xl";

export default function HomePage() {
  const whoIconByNiche: Record<string, IconType> = {
    "HVAC & mechanical": LuSnowflake,
    Plumbing: LuDroplet,
    Electrical: LuZap,
    "Roofing & exteriors": LuHouse,
    "Remodeling & residential build": LuHammer,
    "Concrete & flatwork": LuLayers,
    "Landscaping & outdoor": LuTreePine,
    "Decking & outdoor living": LuTreePine,
    "Restoration & mitigation": LuShieldAlert,
    "Kitchen & bath": LuHouse,
    "Commercial service contractors": LuBuilding2,
    "Professional services with field teams": LuBriefcase,
  };

  const faqItems = homeMeta.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <Section
        id="home"
        variant="hero"
        className="min-h-svh flex items-center"
      >
        <Container>
          <div className="w-full max-w-3xl lg:max-w-5xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4 md:mb-5">
                {homeMeta.heroKicker}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-6xl lg:text-[3.75rem] font-semibold leading-[1.06] tracking-tight">
                <span className="block">
                  <GradientText
                    colors={gradientTextHero}
                    animationSpeed={7}
                    showBorder={false}
                    className="font-semibold"
                  >
                    {homeMeta.heroLine1}
                  </GradientText>
                </span>
                <span className="mt-2.5 md:mt-3.5 block text-4xl md:text-6xl lg:text-[3.75rem] lg:whitespace-nowrap">
                  <GradientText
                    colors={gradientTextHero}
                    animationSpeed={7}
                    showBorder={false}
                    className="text-4xl md:text-6xl lg:text-[3.75rem] font-semibold"
                  >
                    {homeMeta.heroGradientLine}
                  </GradientText>
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="mx-auto mt-6 md:mt-7 text-[15px] md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                {homeMeta.heroSupport}
              </p>
            </FadeIn>
            <FadeIn delay={0.9} className="mt-10 md:mt-12 flex flex-wrap gap-3 justify-center">
              <CTAButton href="/client-results" size="lg">
                {homeMeta.heroCtaPrimary}
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="secondary">
                {homeMeta.heroCtaSecondary}
              </CTAButton>
            </FadeIn>

            <FadeIn delay={1.1}>
              <div className="mt-12 md:mt-14 max-w-3xl mx-auto">
                <div className="h-px w-full bg-neutral-200/70" aria-hidden="true" />
                <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <dt className="sr-only">Opportunities booked</dt>
                    <dd className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                      250+
                    </dd>
                    <div className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs md:text-sm text-neutral-500">
                      Opportunities booked
                    </div>
                  </div>
                  <div className="text-center">
                    <dt className="sr-only">ROI</dt>
                    <dd className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                      40x
                    </dd>
                    <div className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs md:text-sm text-neutral-500">
                      ROI
                    </div>
                  </div>
                  <div className="text-center">
                    <dt className="sr-only">Client revenue</dt>
                    <dd className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                      $4.5M+
                    </dd>
                    <div className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs md:text-sm text-neutral-500">
                      Client revenue
                    </div>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section
        id="what-we-do"
        variant="tight"
        className="scroll-mt-24 md:scroll-mt-28 border-t border-neutral-200/70 bg-white/40"
      >
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={h2}>What we do</h2>
              <p className={`${intro} mt-3 mx-auto`}>{homeMeta.whatWeDoIntro}</p>
            </div>
          </FadeIn>
          <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {homeMeta.pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="liquid-glass rounded-xl px-6 py-7 text-center h-full">
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
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="who" className="border-t border-neutral-200/70">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={h2}>Who we help</h2>
              <p className={`${intro} mt-3 mx-auto`}>{homeMeta.whoIntro}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 max-w-5xl mx-auto">
              <div className="liquid-glass rounded-2xl">
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 divide-neutral-200/30 sm:divide-x lg:divide-x">
                  {homeMeta.whoNiches.map((niche) => {
                    const Icon = whoIconByNiche[niche] ?? LuHardHat;
                    return (
                      <div
                        key={niche}
                        className="group flex flex-col items-center justify-center text-center px-3 py-4 sm:px-7 sm:py-9 sm:min-h-[108px] bg-transparent transition-all duration-200 hover:bg-black/[0.02]"
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1" aria-hidden="true" />
                        <div className="mt-1.5 sm:mt-3 text-[10px] sm:text-[14px] font-semibold text-neutral-800 tracking-tight leading-tight">
                          {niche}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section id="process" className="border-t border-neutral-200/70 bg-neutral-50/50">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
              <h2 className={h2}>How it works</h2>
              <p className={`${intro} mt-3 mx-auto md:mx-0`}>
                {homeMeta.processIntro}
              </p>
            </div>
          </FadeIn>
          <div className="mt-4 max-w-3xl mx-auto md:mx-0 md:max-w-4xl">
            {homeMeta.processSteps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.08}>
                <StepRow
                  step={item.step}
                  title={item.title}
                  description={item.description}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="results" className="border-t border-neutral-200/70">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={h2}>{homeMeta.resultsTitle}</h2>
              <p className={`${intro} mt-3 mx-auto`}>{homeMeta.resultsSupport}</p>
            </div>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {homeMeta.resultsMetrics.map((m, i) => (
              <FadeIn key={m.label} delay={i * 0.1}>
                <MetricCard
                  value={m.value}
                  label={m.label}
                  sublabel={m.sublabel}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="faq" variant="tight" className="border-t border-neutral-200/70 bg-white/35">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={h2}>{homeMeta.faqTitle}</h2>
              <p className={`${intro} mt-3 mx-auto`}>{homeMeta.faqIntro}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section id="contact" className="border-t border-neutral-200/80 py-24 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className={h2}>{homeMeta.bookTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className={`${intro} mt-4 mx-auto`}>{homeMeta.bookSupport}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-10 flex justify-center">
                <ul className="text-left space-y-4 text-[15px] text-neutral-600 w-full max-w-sm">
                  {homeMeta.bookBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <svg aria-hidden="true" className="mt-[3px] h-4 w-4 shrink-0 text-neutral-500" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="mt-12">
                <CTAButton href="/contact" size="lg">
                  {homeMeta.bookCta}
                </CTAButton>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
