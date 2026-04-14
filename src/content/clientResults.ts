/**
 * Placeholder case studies — swap entries and media when final client stories are approved.
 * Video slots accept embed markup later (Loom, Vimeo, YouTube, or custom thumbnail + player).
 */

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type ClientCaseStudy = {
  id: string;
  clientName: string;
  companyAndTrade: string;
  metrics: [CaseStudyMetric, CaseStudyMetric, CaseStudyMetric];
  summary: string;
  quote: string;
};

export const clientResultsIntro = {
  eyebrow: "CASE STUDIES",
  headlineLine1: "Outcomes on the record.",
  headlineLine2: "Partners we’ve grown with.",
  supporting:
    "A look at how contractors and service businesses scale pipeline, bookings, and revenue with paid acquisition and follow-up systems.",
  scrollHint: "Scroll to explore",
};

/** Subtle aggregate strip — illustrative placeholders */
export const aggregateProof = {
  opportunitiesBooked: "780+",
  clientRevenue: "$1.2M+",
  roi: "6–10x",
};

export const caseStudies: ClientCaseStudy[] = [
  {
    id: "scott-houston-concrete",
    clientName: "Scott",
    companyAndTrade: "Houston Area Concrete",
    metrics: [
      { value: "250+", label: "Opportunities booked" },
      { value: "8x", label: "ROI" },
      { value: "$420K", label: "Client revenue" },
    ],
    summary:
      "Tightened lead routing from Meta campaigns into a single booking flow. Follow-up scripts and SMS reminders lifted show-up rate within the first quarter.",
    quote:
      "We finally see which ads produce real jobs—not just form fills.",
  },
  {
    id: "sarah-precision-roofing",
    clientName: "Sarah",
    companyAndTrade: "Precision Roofing Co.",
    metrics: [
      { value: "190+", label: "Booked inspections" },
      { value: "5.2x", label: "Return on ad spend" },
      { value: "$310K", label: "Attributed revenue" },
    ],
    summary:
      "Seasonal demand swings used to wreck pacing. We stabilized budget allocation and added pipeline visibility so the crew stays booked without last-minute panic.",
    quote:
      "The pipeline isn’t a guessing game anymore—we know what’s coming.",
  },
  {
    id: "david-eldorado-builds",
    clientName: "David",
    companyAndTrade: "Eldorado Builds",
    metrics: [
      { value: "340+", label: "Qualified calls" },
      { value: "12x", label: "Pipeline ROI" },
      { value: "$580K", label: "Closed project value" },
    ],
    summary:
      "High-ticket remodel leads needed slower, consultative follow-up. Automated nurture plus clear CRM stages cut drop-off between estimate and signed contract.",
    quote:
      "Leads get handled the same way every time—that consistency closed the gap.",
  },
];
