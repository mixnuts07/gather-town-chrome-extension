import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";
// import { crx } from "@crxjs/vite-plugin";
// import manifest from "./manifest.json";

const manifest = defineManifest({
  manifest_version: 3,
  name: "gather-town-run-run-run",
  description: "オンラインバーチャルスペースGatherの拡張機能です。",
  version: "1.0.0",
  action: {
    default_popup: "popup.html",
  },
  content_scripts: [
    {
      matches: ["https://app.gather.town/app/*"],
      js: ["src/main.tsx"],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
