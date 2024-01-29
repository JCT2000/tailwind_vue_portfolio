import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tailwind_vue_portfolio/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
    assetsInclude: ["**/*.JPG"],
    chunkSizeWarningLimit: 1000, // Set your desired limit in KB
});
