import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/jct-hub-pwa/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "pwa-192.png", "pwa-512.png"],
      manifest: {
        name: "BuildLogic JCT Hub",
        short_name: "JCT Hub",
        description: "BuildLogic — JCT tools hub (installable PWA).",
        theme_color: "#0b1220",
        background_color: "#0b1220",
        display: "standalone",
        scope: "/jct-hub-pwa/",
        start_url: "/jct-hub-pwa/",
        icons: [
          { src: "pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
        ],
      },
    }),
  ],
});
