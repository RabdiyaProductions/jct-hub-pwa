import { Link } from "react-router-dom";

export default function ChatBot() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>ChatBot</h1>
      <p style={{ opacity: 0.85, marginTop: 0 }}>
        This is the hub chatbot entry page. (You can wire this into your real GPT flow later.)
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link to="/">Home</Link>
        <Link to="/tools">Browse Tools</Link>
      </div>

      <div
        style={{
          marginTop: 18,
          padding: 16,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <strong>Next step:</strong> connect this to your actual chatbot UI (or embed your GPT workflow).
        <div style={{ marginTop: 10, opacity: 0.85 }}>
          For now, this confirms routing works and stops “Open ChatBot” looking broken.
        </div>
      </div>
    </div>
  );
}
