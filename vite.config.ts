// vite.config.ts
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tsconfigPaths()],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "SphinxApp",
      fileName: "sphinx",
    },
    outDir: "dist",
  },
});
