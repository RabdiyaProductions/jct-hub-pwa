import SuiteTemplate from "./suite-template";

export default function JCTCoreRiskSuite() {
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
    "Programme delay risk framing and narrative structure",
  ];

  const deliverables = [
    "Suite PDF pack (as per brochure)",
    "Editable templates (where applicable)",
    "Action checklist + next steps guidance",
  ];

  // ✅ IMPORTANT: tiers must be a plain array of objects (not wrapped in extra braces)
  const tiers = [
    {
      name: "Basic",
      price: "£795",
      stripeUrl: "https://buy.stripe.com/bJedR97D54V0393gwKaMU0o",
      bullets: ["Core pack", "Standard templates", "Quick-start checklist"],
    },
    {
      name: "Standard",
      price: "£995",
      stripeUrl: "https://buy.stripe.com/6oUeVd1eHcns4d74O2aMU0p",
      bullets: ["Everything in Basic", "Expanded guidance", "Better coverage depth"],
    },
    {
      name: "Premium",
      price: "£1,495",
      stripeUrl: "https://buy.stripe.com/fZu8wPbTl0EKfVPgwKaMU0q",
      bullets: ["Everything in Standard", "Advanced prompts", "Higher certainty outputs"],
    },
    {
      name: "Executive",
      price: "£2,495",
      // keep your existing executive Stripe link (the one that already works)
      stripeUrl: "https://buy.stripe.com/5kQfZh5uXafk8tn3JYaMU0r",
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
      title="JCT Core Risk Suite"
      subtitle="Structured commercial intelligence for payment, change, and programme risk under JCT contracts."
      whoFor={whoFor}
      outcomes={outcomes}
      included={included}
      deliverables={deliverables}
      tiers={tiers}
    />
  );
}
