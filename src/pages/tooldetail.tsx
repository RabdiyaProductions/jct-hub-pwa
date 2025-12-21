import { Link, useParams } from "react-router-dom";
import { tools } from "../data/tools";

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return (
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
        <h1>Tool not found</h1>
        <Link to="/tools">Back to Tools</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 560px" }}>
          <h1 style={{ marginBottom: 6 }}>{tool.title}</h1>
          <div style={{ opacity: 0.85 }}>{tool.summary}</div>
          <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
            {tool.category} • {tool.status.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 180 }}>
          <Link to="/tools">All tools</Link>
          <a href="/chatbot">Open ChatBot</a>

          {tool.stripeUrl ? (
            <a href={tool.stripeUrl} target="_blank" rel="noreferrer">
              Buy this tool
            </a>
          ) : (
            <span style={{ opacity: 0.6 }}>Stripe link pending</span>
          )}
        </div>
      </div>

      <div style={{ marginTop: 18, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        {tool.appUrl ? (
          <>
            <h3>Open tool</h3>
            <p>This tool is live in a separate app:</p>
            <a href={tool.appUrl} target="_blank" rel="noreferrer">
              {tool.appUrl}
            </a>
          </>
        ) : (
          <>
            <h3>Tool UI coming next</h3>
            <p style={{ marginBottom: 0 }}>
              This hub page is ready. Next we embed the tool UI here or link to a tool app.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
