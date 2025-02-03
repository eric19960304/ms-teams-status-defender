import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.GITHUB_PAGES
        ? "ms-teams-status-defender"
        : "./",
    plugins: [react()],
    build: {
      outDir: './docs',
      emptyOutDir: true,
    },
});