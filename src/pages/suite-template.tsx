type Tier = {
  name: string;
  price: string;
  stripeUrl: string;
  bullets: string[];
};

type SuitePageProps = {
  title: string;
  subtitle: string;
  whoFor: string[];
  outcomes: string[];
  included: string[];
  deliverables: string[];
  tiers: Tier[];
};

function PricingTile({ tier }: { tier: Tier }) {
  const disabled = !tier.stripeUrl || tier.stripeUrl === "#";
  return (
    <div className="price-card">
      <h3>{tier.name}</h3>
      <p className="price">{tier.price}</p>
      <ul>
        {tier.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {disabled ? (
        <button className="btn disabled" disabled>
          Coming soon
        </button>
      ) : (
        <a className="btn" href={tier.stripeUrl} target="_blank" rel="noreferrer">
          Buy {tier.name}
        </a>
      )}
    </div>
  );
}

export default function SuiteTemplate(props: SuitePageProps) {
  return (
    <div className="page">
      <header className="hero">
        <h1>{props.title}</h1>
        <p className="sub">{props.subtitle}</p>
      </header>

      <section className="section">
        <h2>Who this is for</h2>
        <ul>
          {props.whoFor.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>What you achieve</h2>
        <ul>
          {props.outcomes.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>What’s included</h2>
        <ul>
          {props.included.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Deliverables</h2>
        <ul>
          {props.deliverables.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Choose your plan</h2>
        <div className="pricing-grid">
          {props.tiers.map((t) => (
            <PricingTile key={t.name} tier={t} />
          ))}
        </div>
      </section>

      <section className="section fineprint">
        <p>
          Note: outputs are advisory and must be reviewed for project-specific facts and contract particulars.
        </p>
      </section>
    </div>
  );
}
