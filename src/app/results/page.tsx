import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { MetricCard } from "@/components/MetricCard";

// TODO: Replace with real case studies and client-approved outcomes
const CASE_STUDIES = [
  {
    location: "Home services — Southwest US",
    problem:
      "Lead volume was high but show-up rates for appointments were low, and follow-up was manual.",
    whatWeDid:
      "Launched Meta lead campaigns with a dedicated booking page, then implemented an AI follow-up system (SMS + email) and CRM pipeline automation.",
    outcome: "Example: 2.1x more booked appointments in 90 days; lead-to-book rate improved. (Placeholder — replace with real client outcome.)",
  },
  {
    location: "Professional services — Midwest",
    problem:
      "Needed predictable pipeline without relying on referrals. No clear tracking from ad spend to revenue.",
    whatWeDid:
      "Google and Meta campaigns aligned to high-intent keywords and audiences, plus CRM setup, conversion tracking, and dashboards for cost-per-booking.",
    outcome: "Example: 40+ qualified calls per month; clear ROI visibility. (Placeholder — replace with real client outcome.)",
  },
  {
    location: "Health & wellness — West Coast",
    problem:
      "Existing ads were generating leads but follow-up was slow and inconsistent.",
    whatWeDid:
      "Optimized existing campaigns for appointment conversion and built a custom AI follow-up flow with lead scoring and automated reminders.",
    outcome: "Example: Faster first response, higher show-up rate. (Placeholder — replace with real client outcome.)",
  },
];

export default function ResultsPage() {
  return (
    <>
      <Section className="pt-20 md:pt-28 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight max-w-3xl">
            Results we help partners achieve
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            Real outcomes come from combining paid acquisition with consistent
            follow-up and clear tracking. Below are example results and case
            snapshots — we’ll share what’s realistic for your situation on the
            call.
          </p>
        </Container>
      </Section>

      {/* Case study cards - TODO: replace with real case studies and approved metrics */}
      <Section className="bg-neutral-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Case studies
          </h2>
          <div className="space-y-6">
            {CASE_STUDIES.map((cs, i) => (
              <Card key={i}>
                <p className="text-sm font-medium text-neutral-500">
                  📍 {cs.location}
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                      Problem
                    </h3>
                    <p className="mt-1 text-neutral-600">{cs.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                      What we did
                    </h3>
                    <p className="mt-1 text-neutral-600">{cs.whatWeDid}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                    Outcome
                  </h3>
                  <p className="mt-1 text-neutral-600">{cs.outcome}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Metrics grid - placeholder */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Example metrics
          </h2>
          <p className="text-neutral-600 max-w-2xl mb-10">
            Illustrative numbers — actual results depend on industry, offer, and
            budget. We’ll set clear targets with you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value="2–4x" label="ROAS (example)" />
            <MetricCard
              value="30–50%"
              label="Lead-to-book (example)"
            />
            <MetricCard value="100+" label="Calls/month (example)" />
            <MetricCard value="&lt; 24h" label="First touch" />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Want results like these for your business?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Book a free call and we’ll walk through your goals and what’s
              possible.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
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
