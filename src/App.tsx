// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import { MAINTENANCE_MODE } from "./config";

/**
 * Maintenance mode:
 * - EVERYTHING routes to ComingSoon
 * - This prevents partial/unfinished tools from being accessed publicly
 */
export default function App() {
  if (MAINTENANCE_MODE) {
    return (
      <Routes>
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/coming-soon" replace />} />
      </Routes>
    );
  }

  /**
   * When MAINTENANCE_MODE is false:
   * Put your real app routes here (Dashboard, Tools, etc.)
   * For now, we still show ComingSoon as a safe default until your mega-suite is ready.
   */
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Navigate to="/coming-soon" replace />} />
    </Routes>
  );
}
