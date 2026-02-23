import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { Card } from "@/components/Card";
import { MetricCard } from "@/components/MetricCard";
import { StepRow } from "@/components/StepRow";
import { FAQAccordion } from "@/components/FAQAccordion";
import GradientText from "@/components/GradientTextClient";

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Attract",
    description:
      "We run paid campaigns on Meta and Google to drive qualified leads into your pipeline. Audiences are tailored to your offer so you get people who are ready to book.",
    bullets: [
      "Targeted ad creative and audiences",
      "Landing pages built for conversion",
      "Clear tracking from click to appointment",
    ],
  },
  {
    step: 2,
    title: "Automate",
    description:
      "Custom AI-powered follow-up handles SMS, email, and pipeline touches so every lead gets timely, relevant contact without manual work from your team.",
    bullets: [
      "SMS and email sequences",
      "Lead scoring and routing",
      "Pipeline automation that fits your process",
    ],
  },
  {
    step: 3,
    title: "Convert",
    description:
      "Leads are nurtured until they're ready to book. We focus on trust-building and clear next steps so more of them show up to calls and close.",
    bullets: [
      "Consistent follow-up until they book",
      "Reduced no-shows with reminders",
      "Handoff to your sales team when ready",
    ],
  },
  {
    step: 4,
    title: "Scale",
    description:
      "We use data from your campaigns and pipeline to optimize spend, creative, and sequences so you can scale appointments without sacrificing quality.",
    bullets: [
      "Ongoing optimization and testing",
      "Reporting tied to booked appointments",
      "Sustainable growth as you ramp spend",
    ],
  },
];

const SERVICES = [
  {
    title: "Paid Acquisition",
    subtitle: "Meta & Google",
    description:
      "Strategic paid campaigns that drive qualified traffic and booked appointments. We manage creative, audiences, and budgets so you get consistent lead flow.",
  },
  {
    title: "AI Follow-Up System",
    subtitle: "SMS, email, pipeline",
    description:
      "Custom automation for follow-up, lead scoring, and pipeline movement. Every lead gets timely touchpoints so you convert more without extra manual work.",
  },
  {
    title: "Pipeline + Reporting",
    subtitle: "CRM, tracking, dashboards",
    description:
      "CRM setup, conversion tracking, and dashboards that show real performance—from ad spend to booked calls and revenue.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How quickly can we see booked appointments?",
    answer:
      "Timeline depends on your market, offer, and budget. Many partners see first booked calls within 2–4 weeks of launch. We'll give you a realistic timeline on the intro call.",
  },
  {
    question: "Do you work with any industry or only specific verticals?",
    answer:
      "We focus on lead gen and appointment-setting for businesses that sell high-consideration services (e.g. home services, professional services, health). If you have a clear offer and a sales process, we can discuss fit.",
  },
  {
    question: "What does the AI follow-up system actually do?",
    answer:
      "It handles automated SMS and email sequences, lead scoring, and pipeline steps so leads are followed up until they book or opt out. You get a system tailored to your CRM and process.",
  },
  {
    question: "Is there a minimum ad spend or contract length?",
    answer:
      "We'll discuss minimums and terms on the call. We aim for setups that make sense for your size and goals rather than one-size-fits-all requirements.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "A clear offer, a way to take appointments (calendar or CRM), and a budget for ads and our services. We'll walk through your current setup and next steps on the free call.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section id="home" className="pt-24 md:pt-32 pb-20 md:pb-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-bold">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                <GradientText
                  colors={["#ffffff", "#172d4a", "#38bdf8", "#172d4a", "#ffffff"]}
                  animationSpeed={12.5}
                  showBorder={false}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  Automated Growth.
                </GradientText>
              </h1>
              <div className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                <GradientText
                  colors={["#ffffff", "#172d4a", "#38bdf8", "#172d4a", "#ffffff"]}
                  animationSpeed={12.5}
                  showBorder={false}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  Intelligent Results.
                </GradientText>
              </div>
            </div>
            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-center md:text-center">
              Paid ads. Smart lead qualification. Automated follow-up.
              <br />
              We generate the opportunities — you close the deals.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <CTAButton href="/contact" size="lg">
                Get Started
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works - id about for nav */}
      <Section id="about" className="relative">
        <div className="absolute inset-0 bg-white/[0.02] rounded-3xl mx-4 md:mx-8 pointer-events-none" aria-hidden />
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText
                colors={["#ffffff", "#38bdf8", "#172d4a", "#ffffff"]}
                animationSpeed={10}
                showBorder={false}
                className="text-3xl md:text-4xl font-bold"
              >
                How it works
              </GradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center md:text-center">
              A simple four-step process: we attract leads with paid ads, automate
              follow-up with AI, convert them into booked calls, and scale what
              works.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {HOW_IT_WORKS.map((item) => (
              <StepRow
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                bullets={item.bullets}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Services - big glass panel */}
      <Section className="relative">
        <div className="rounded-3xl mx-4 md:mx-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 p-8 md:p-12">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <GradientText
                  colors={["#ffffff", "#38bdf8", "#172d4a", "#ffffff"]}
                  animationSpeed={10}
                  showBorder={false}
                  className="text-3xl md:text-4xl font-bold"
                >
                  What we offer
                </GradientText>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center md:text-center">
                Three core areas that work together: paid acquisition, AI follow-up,
                and pipeline visibility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <Card key={i}>
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {s.subtitle}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </div>
      </Section>

      {/* Results preview + GlassIcons */}
      <Section id="results" className="relative">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText
                colors={["#ffffff", "#38bdf8", "#172d4a", "#ffffff"]}
                animationSpeed={10}
                showBorder={false}
                className="text-3xl md:text-4xl font-bold"
              >
                Results we help drive
              </GradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center md:text-center">
              Example outcomes from our approach. Real results depend on your
              market, offer, and budget — we'll discuss what's realistic on the
              call.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <MetricCard
              value="150+"
              label="Appointments booked"
            />
            <MetricCard
              value="3.2x"
              label="ROAS (example)"
              sublabel="Return on ad spend"
            />
            <MetricCard
              value="40%"
              label="Lead-to-book rate"
              sublabel="Example benchmark"
            />
            <MetricCard
              value="&lt; 48hr"
              label="First response"
              sublabel="AI follow-up"
            />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="relative">
        <div className="rounded-3xl mx-4 md:mx-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 p-8 md:p-12">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <GradientText
                  colors={["#ffffff", "#38bdf8", "#172d4a", "#ffffff"]}
                  animationSpeed={10}
                  showBorder={false}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Frequently asked questions
                </GradientText>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center md:text-center">
                Common questions about our process and what to expect.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </Container>
        </div>
      </Section>

      {/* Final CTA band */}
      <Section id="contact" className="py-24 md:py-28">
        <div className="rounded-3xl mx-4 md:mx-8 bg-white/10 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 p-12 md:p-16">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to fill your calendar with qualified calls?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Book a free call. We'll review your goals and outline a plan.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
}
