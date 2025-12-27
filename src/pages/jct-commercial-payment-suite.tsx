import SuiteTemplate from "./suite-template";

export default function JCTCommercialPaymentSuite() {
  const whoFor = [
    "Main contractors operating under JCT",
    "Developers needing cost certainty and payment compliance",
    "QS / Commercial Managers needing fast, defensible outputs",
  ];

  const outcomes = [
    "Reduce payment and notice risk",
    "Create consistent, professional documentation",
    "Improve negotiation position with structured outputs",
  ];

  const included = [
    "Payment / Pay Less risk prompts and drafting guidance",
    "Change & variation authority checklist",
    "Commercial position summary + next steps guidance",
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
      stripeUrl: "https://buy.stripe.com/3cIfZh2iLcnsfVPbcqaMU0k",
      bullets: ["Core pack", "Standard templates", "Quick-start checklist"],
    },
    {
      name: "Standard",
      price: "£1,195",
      stripeUrl: "https://buy.stripe.com/7sY5kD8H9afk3932FUaMU0l",
      bullets: ["Everything in Basic", "Expanded guidance", "Better coverage depth"],
    },
    {
      name: "Premium",
      price: "£1,795",
      stripeUrl: "https://buy.stripe.com/5kQ7sL5uX2MS24Z0xMaMU0m",
      bullets: ["Everything in Standard", "Advanced prompts", "Higher certainty outputs"],
    },
    {
      name: "Executive",
      price: "£2,995",
      stripeUrl: "https://buy.stripe.com/7sY3cvf5x9bg24Z3JYaMU0n",
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
      title="JCT Commercial + Payment Suite"
      subtitle="Structured commercial intelligence for payment, change, and risk under JCT contracts."
      whoFor={whoFor}
      outcomes={outcomes}
      included={included}
      deliverables={deliverables}
      tiers={tiers}
    />
  );
}
