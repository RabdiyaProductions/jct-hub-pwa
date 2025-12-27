import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>BuildLogic — JCT Hub</h1>
      <p style={{ opacity: 0.85, marginTop: 0 }}>
        All JCT tools in one installable app. Start with a tool, buy if needed, and get output fast.
      </p>

<div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
  <Link to="/tools">Browse Tools</Link>
  <Link to="/chatbot">Open ChatBot</Link>
  <Link to="/suites/jct-core-risk">JCT Core Risk Suite</Link>
  <Link to="/suites/jct-commercial-payment">JCT Commercial Payment Suite</Link>
  <Link to="/suites/jct-programme-completion">JCT Programme Completion Suite</Link>
</div>

      <div style={{ marginTop: 18, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <strong>Today’s goal:</strong> Activate the JCT landing page links and start turning “Coming Soon” into “Live”.
      </div>
    </div>
  );
}
