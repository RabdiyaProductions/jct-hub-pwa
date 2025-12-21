import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { tools } from "../data/tools";

export default function Tools() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set(tools.map((t) => t.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return tools.filter((t) => {
      const matchesText =
        !s || (t.title + " " + t.summary).toLowerCase().includes(s);
      const matchesCat = category === "All" || t.category === category;
      return matchesText && matchesCat;
    });
  }, [q, category]);

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1>Tools</h1>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "12px 0" }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search tools…"
          style={{ flex: "1 1 260px", padding: 10 }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: 10 }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <Link to="/">Home</Link>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {filtered.map((t) => (
          <div key={t.id} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 520px" }}>
                <h3 style={{ margin: "0 0 6px" }}>{t.title}</h3>
                <div style={{ opacity: 0.85 }}>{t.summary}</div>
                <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
                  {t.category} • {t.status.toUpperCase()}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
                <Link to={`/tools/${t.slug}`}>Open</Link>

                {t.stripeUrl ? (
                  <a href={t.stripeUrl} target="_blank" rel="noreferrer">
                    Buy
                  </a>
                ) : (
                  <span style={{ opacity: 0.6 }}>Buy (pending)</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
