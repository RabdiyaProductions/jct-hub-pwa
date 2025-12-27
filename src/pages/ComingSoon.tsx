// src/pages/ComingSoon.tsx
import React from "react";
import { COMING_SOON_MESSAGE } from "../config";

export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "min(920px, 100%)",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          padding: 28,
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: "#111827",
              display: "grid",
              placeItems: "center",
              color: "white",
              fontWeight: 900,
              fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
            }}
          >
            BL
          </div>
          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "#111827",
                fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
              }}
            >
              BuildLogic JCT Hub
            </div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>
              Maintenance Mode
            </div>
          </div>
        </div>

        <h1
          style={{
            marginTop: 18,
            marginBottom: 8,
            fontSize: 40,
            letterSpacing: -0.8,
            color: "#111827",
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
          }}
        >
          Coming soon
        </h1>

        <p
          style={{
            marginTop: 0,
            marginBottom: 16,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#374151",
          }}
        >
          {COMING_SOON_MESSAGE}
        </p>

        <div
          style={{
            marginTop: 18,
            padding: 16,
            borderRadius: 14,
            background: "#0b1220",
            color: "rgba(255,255,255,0.92)",
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          <div style={{ fontWeight: 800, marginBottom: 6 }}>
            What’s being built right now
          </div>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Project setup wizard + saved project workspace</li>
            <li>Multi-module inputs (contract/scope/change/commercial/programme)</li>
            <li>Dashboards + export packs (PDF/CSV) + document vault</li>
            <li>Proper gating & licensing (no “pay then blank page” risk)</li>
          </ul>
        </div>

        <div style={{ marginTop: 18, fontSize: 12, color: "#6b7280" }}>
          Founder note: turn off maintenance by setting{" "}
          <b>MAINTENANCE_MODE = false</b> in <b>src/config.ts</b>.
        </div>
      </div>
    </div>
  );
}
