import { Link, useParams } from "react-router-dom";
import { tools, type Tool } from "../data/tools";

export default function ToolDetail() {
  const { slug } = useParams<{ slug: string }>();

  const tool: Tool | undefined = tools.find((t) => t.slug === slug);

  if (!tool) {
    return (
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
        <h1>Tool not found</h1>
        <Link to="/tools">Back to Tools</Link>
      </div>
    );
  }

  const bullets =
    tool.bullets && tool.bullets.length
      ? tool.bullets
      : [
          "Structured prompts + guidance",
          "Clear outputs you can copy/paste into your workflow",
          "Designed for fast, defensible decisions",
        ];

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 560px" }}>
          <h1 style={{ marginBottom: 6 }}>{tool.title}</h1>
          <div style={{ opacity: 0.85 }}>{tool.summary}</div>

          <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
            {tool.category} • {tool.status.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 200 }}>
          <Link to="/tools">All tools</Link>
          <Link to="/chatbot">Open ChatBot</Link>

          {tool.stripeUrl ? (
            <a href={tool.stripeUrl} target="_blank" rel="noreferrer">
              Buy this tool
            </a>
          ) : (
            <span style={{ opacity: 0.6 }}>Stripe link pending</span>
          )}
        </div>
      </div>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>What you get</h2>
          <ul style={{ marginBottom: 0 }}>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Price</h2>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 28, fontWeight: 700 }}>
                {tool.price ? tool.price : "See Stripe"}
              </div>
              <div style={{ opacity: 0.75, marginTop: 6 }}>
                One-off payment • Instant access
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {tool.stripeUrl ? (
                <a href={tool.stripeUrl} target="_blank" rel="noreferrer">
                  Buy now
                </a>
              ) : (
                <span style={{ opacity: 0.6 }}>Buy (pending)</span>
              )}
            </div>
          </div>
        </div>

        <div style={{ fontSize: 12, opacity: 0.7 }}>
          Note: outputs are advisory and must be reviewed for project-specific facts and contract particulars.
        </div>
      </div>
    </div>
  );
}
