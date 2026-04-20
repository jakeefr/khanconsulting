import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { StepRow } from "@/components/StepRow";

const BELIEFS = [
  "Paid acquisition works when it’s tied to a clear offer and a smooth path to booking.",
  "Follow-up is where most leads are lost — automation and AI should close that gap.",
  "You need visibility from ad spend to booked calls and revenue, not just leads.",
  "One-size-fits-all doesn’t scale; we tailor campaigns and systems to your business.",
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Attract",
    description:
      "Paid campaigns on Meta and Google drive qualified traffic into your funnel.",
  },
  {
    step: 2,
    title: "Automate",
    description:
      "Custom AI handles SMS, email, and pipeline follow-up so every lead gets timely contact.",
  },
  {
    step: 3,
    title: "Convert",
    description:
      "Leads are nurtured until they book; you get more show-ups and closed deals.",
  },
  {
    step: 4,
    title: "Scale",
    description:
      "We optimize based on data so you can scale appointments without burning budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 md:pt-28 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight max-w-3xl">
            About Khan Consulting
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            We help growth-focused businesses fill their calendars with
            qualified calls. We do that by combining paid acquisition (Meta &
            Google) with custom AI follow-up systems and clear pipeline
            reporting.
          </p>
        </Container>
      </Section>

      <Section className="bg-neutral-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Who we are
          </h2>
          <p className="text-neutral-600 max-w-2xl leading-relaxed">
            Khan Consulting is built around a simple idea: most companies
            either get leads but don’t follow up well, or they follow up
            manually and can’t scale. We focus on both sides — driving
            qualified traffic with paid ads and automating follow-up with
            custom AI so you get more booked appointments without the
            operational headache. We work with businesses that have a clear
            offer and a sales process, and we tailor our approach to your
            market and goals.
          </p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            What we believe
          </h2>
          <ul className="space-y-4 max-w-2xl">
            {BELIEFS.map((b, i) => (
              <li key={i} className="flex gap-3 text-neutral-600">
                <span className="text-neutral-400 font-bold">—</span>
                {b}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-neutral-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Our process
          </h2>
          <div className="space-y-10">
            {PROCESS_STEPS.map((item) => (
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

      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Let’s talk about your goals
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Book a free call and we’ll outline how we can help.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="liquid-glass-strong inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-neutral-900 rounded-2xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
