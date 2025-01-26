import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//npm install --save-dev vite-plugin-svgr
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      json: "/src/json",
      paginas: "/src/paginas",
    },
  },
});
