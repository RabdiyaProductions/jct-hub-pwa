import SuiteTemplate from "./suite-template";

export default function JCTProgrammeCompletionSuite() {
  const whoFor = [
    "Main contractors managing programme and completion risk under JCT",
    "Developers wanting clean completion, handover, and final account positioning",
    "QS / Commercial Managers needing structured delay and completion outputs",
  ];

  const outcomes = [
    "Reduce programme delay risk and improve defensibility",
    "Create consistent narratives for EOT / completion issues",
    "Improve settlement position towards completion and final account",
  ];

  const included = [
    "Programme delay / EOT framing and narrative structure",
    "Completion / handover risk checklist and prompts",
    "Evidence prompts + practical next steps",
  ];

  const deliverables = [
    "Suite PDF pack (as per brochure)",
    "Editable templates (where applicable)",
    "Action checklist + next steps guidance",
  ];

  const tiers = [
    {
      name: "Basic",
      price: "£895",
      stripeUrl: "https://buy.stripe.com/3cIbJ12iLdrw5hb1BQaMU0g",
      bullets: ["Core pack", "Standard templates", "Quick-start checklist"],
    },
    {
      name: "Standard",
      price: "£1,195",
      stripeUrl: "https://buy.stripe.com/eVq6oHbTldrw5hbeoCaMU0h",
      bullets: ["Everything in Basic", "Expanded guidance", "Better coverage depth"],
    },
    {
      name: "Premium",
      price: "£1,795",
      stripeUrl: "https://buy.stripe.com/8x228r0aD7386lfcguaMU0i",
      bullets: ["Everything in Standard", "Advanced prompts", "Higher certainty outputs"],
    },
    {
      name: "Executive",
      price: "£2995",
      stripeUrl: "https://buy.stripe.com/eVqaEXbTl0EKbFzeoCaMU0j",
      bullets: [
        "Everything in Premium",
        "Priority review + tighter certainty",
        "Negotiation-ready output pack",
        "Best-fit caveats + risk flags",
      ],
    },
  ];

  return (
    <SuiteTemplate
      title="JCT Programme + Completion Suite"
      subtitle="Structured programme and completion intelligence for EOT, handover, and completion risk under JCT."
      whoFor={whoFor}
      outcomes={outcomes}
      included={included}
      deliverables={deliverables}
      tiers={tiers}
    />
  );
}
