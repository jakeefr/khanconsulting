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
  /** Attribution line shown below the blockquote, e.g. "— Aaron, North 53 Construction" */
  quoteAttribution?: string;
  /** Optional Wistia media ID — renders an inline Wistia embed instead of the placeholder */
  wistiaId?: string;
  /** Optional aspect ratio for the Wistia player web component (e.g. "1.889763779527559").
   *  When set, uses <wistia-player> instead of the standard iframe embed. */
  wistiaAspect?: string;
};

export const clientResultsIntro = {
  eyebrow: "CASE STUDIES",
  headlineLine1: "Built on results.",
  headlineLine2: "Backed by stories.",
  supporting:
    "See how contractors are building steadier pipelines, booking better opportunities, and creating growth they can actually feel.",
  scrollHint: "Scroll to see results",
};

export const caseStudies: ClientCaseStudy[] = [
  {
    id: "hesham-platinum-epoxy-flooring",
    clientName: "Hesham",
    companyAndTrade: "Platinum Epoxy Flooring",
    metrics: [
      { value: "$2.0K", label: "Ad Spend" },
      { value: "$40K", label: "Revenue" },
      { value: "20x", label: "Return" },
    ],
    summary:
      "Hesham was struggling to keep work coming in consistently and had been burned by bad marketing in the past. Once he started using our system, he began bringing in more consistent opportunities and growing with more confidence.",
    quote:
      "I\u2019ve been burned by other agencies before, but this is the first one that actually delivered.",
    quoteAttribution: "— Hesham",
    wistiaId: "ep3ymdvedr",
    wistiaAspect: "1.889763779527559",
  },
  {
    id: "aaron-north53-construction",
    clientName: "Aaron",
    companyAndTrade: "North 53 Construction",
    metrics: [
      { value: "$1.8K", label: "Ad Spend" },
      { value: "$200K", label: "Revenue" },
      { value: "110x", label: "Return" },
    ],
    summary:
      "Aaron had grown mostly through word of mouth and referrals, but the flow of new work was becoming too unpredictable. He needed a more consistent way to create opportunities, keep his pipeline active, and bring in steady jobs without waiting on referrals.",
    quote:
      "I\u2019m quite positive about the future of my business now \u2014 just based on the sheer amount of work and leads I have coming in compared to before.",
    quoteAttribution: "— Aaron",
    wistiaId: "r7miiklxcu",
  },
  // -- Restore when video is ready --
  // {
  //   id: "sarah-precision-roofing",
  //   clientName: "Sarah",
  //   companyAndTrade: "Precision Roofing Co.",
  //   metrics: [
  //     { value: "190+", label: "Booked inspections" },
  //     { value: "5.2x", label: "Return on ad spend" },
  //     { value: "$310K", label: "Attributed revenue" },
  //   ],
  //   summary:
  //     "Seasonal demand swings used to wreck pacing. We stabilized budget allocation and added pipeline visibility so the crew stays booked without last-minute panic.",
  //   quote:
  //     "The pipeline isn\u2019t a guessing game anymore\u2014we know what\u2019s coming.",
  // },
  // -- Restore when video is ready --
  // {
  //   id: "david-eldorado-builds",
  //   clientName: "David",
  //   companyAndTrade: "Eldorado Builds",
  //   metrics: [
  //     { value: "340+", label: "Qualified calls" },
  //     { value: "12x", label: "Pipeline ROI" },
  //     { value: "$580K", label: "Closed project value" },
  //   ],
  //   summary:
  //     "High-ticket remodel leads needed slower, consultative follow-up. Automated nurture plus clear CRM stages cut drop-off between estimate and signed contract.",
  //   quote:
  //     "Leads get handled the same way every time\u2014that consistency closed the gap.",
  // },
];
