// src/data/tools.ts

export type ToolStatus = "live" | "coming-soon";

export type ToolCategory =
  | "QS Toolkit"
  | "Contracts Toolkit"
  | "Notices"
  | "Commercial"
  | "Admin"
  | "Other";

export type Tool = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ToolCategory;
  status: ToolStatus;
  stripeUrl?: string; // optional (so "pending" tools don't error)
  appUrl: string; // internal route
  price?: string;
  bullets?: string[];
};

export const tools: Tool[] = [
  // =========================
  // NOTICES (JCT) - LIVE
  // =========================
  {
    id: "jct-tool-001",
    slug: "payment-notice-generator",
    title: "Payment Notice Generator (JCT)",
    summary: "Draft a Payment Notice with structured valuation lines and timings.",
    category: "Notices",
    status: "live",
    stripeUrl: "https://buy.stripe.com/28E7sL0aD2MS8tnbcqaMU0A",
    appUrl: "/tools/payment-notice-generator",
    price: "£695",
    bullets: [
      "Valuation structure built in",
      "Clear, defensible notice format",
      "Designed for contract compliance",
    ],
  },
  {
    id: "jct-tool-002",
    slug: "pay-less-notice-generator",
    title: "Pay Less Notice Generator (JCT)",
    summary: "Generate a compliant Pay Less Notice draft with key fields and dates.",
    category: "Notices",
    status: "live",
    stripeUrl: "https://buy.stripe.com/28EfZhaPhevAdNH4O2aMU0y",
    appUrl: "/tools/pay-less-notice-generator",
    price: "£695",
    bullets: [
      "Structured Pay Less Notice drafting",
      "Correct statutory timing prompts",
      "Ready-to-use professional output",
    ],
  },

  // =========================
  // COMMERCIAL (JCT) - LIVE
  // =========================
  {
    id: "jct-tool-003",
    slug: "eot-tracker",
    title: "EOT Tracker (JCT)",
    summary: "Track delays, notices, evidence, and cause/effect in one place.",
    category: "Commercial",
    status: "live",
    stripeUrl: "https://buy.stripe.com/8x200j3mPdrwfVP6WaaMU0z",
    appUrl: "/tools/eot-tracker",
    price: "£695",
    bullets: [
      "Delay and event logging",
      "Cause-and-effect tracking",
      "Evidence-ready structure",
    ],
  },

  // =========================
  // YOUR 3 PAID REVIEWS (existing Stripe links)
  // =========================
  {
    id: "jct-tool-004",
    slug: "jct-contract-review",
    title: "JCT Contract Review",
    summary: "Fast contract risk review with red flags, actions, and draft wording.",
    category: "Contracts Toolkit",
    status: "live",
    stripeUrl: "https://buy.stripe.com/9B69ATgB2MS7pj94iaMU0f",
    appUrl: "/tools/jct-contract-review",
    price: "£695",
    bullets: [
      "Red flag scan + risk rating",
      "Draft clause amendments (where relevant)",
      "Action checklist for next steps",
    ],
  },
  {
    id: "jct-tool-005",
    slug: "jct-payment-risk-review",
    title: "JCT Payment Risk Review",
    summary: "Identify payment exposure, notice risks, and practical steps to protect cashflow.",
    category: "Commercial",
    status: "live",
    stripeUrl: "https://buy.stripe.com/bJe3cvCXPbjo10V402aMU0d",
    appUrl: "/tools/jct-payment-risk-review",
    price: "£695",
    bullets: [
      "Red flag scan + risk rating",
      "Draft clause amendments (where relevant)",
      "Action checklist for next steps",
    ],
  },
  {
    id: "jct-tool-006",
    slug: "jct-programme-risk-review",
    title: "JCT Programme Risk Review",
    summary: "Programme delay and EOT risk framing with evidence prompts and next steps.",
    category: "Commercial",
    status: "live",
    stripeUrl: "https://buy.stripe.com/14AeVdf5x87c10VgwKaMU0e",
    appUrl: "/tools/jct-programme-risk-review",
    price: "£695",
    bullets: [
      "Red flag scan + risk rating",
      "Draft clause amendments (where relevant)",
      "Action checklist for next steps",
    ],
  },
];
