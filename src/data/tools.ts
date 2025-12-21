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

  stripeUrl?: string;
  appUrl?: string;
};

export const tools: Tool[] = [
  {
    id: "jct-tool-001",
    slug: "payment-notice-generator",
    title: "Payment Notice Generator (JCT)",
    summary: "Draft a Payment Notice with structured valuation lines and timings.",
    category: "Notices",
    status: "coming-soon",
  },
  {
    id: "jct-tool-002",
    slug: "pay-less-notice-generator",
    title: "Pay Less Notice Generator (JCT)",
    summary: "Generate a compliant Pay Less Notice draft with key fields and dates.",
    category: "Notices",
    status: "coming-soon",
  },
  {
    id: "jct-tool-003",
    slug: "eot-tracker",
    title: "EOT Tracker (JCT)",
    summary: "Track delays, notices, evidence, and cause/effect in one place.",
    category: "Commercial",
    status: "coming-soon",
  },
];
