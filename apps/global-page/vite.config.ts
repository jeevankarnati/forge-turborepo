import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const reactPkg = path.resolve(__dirname, "node_modules/react");
const reactDomPkg = path.resolve(__dirname, "node_modules/react-dom");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src/*"),
      // Rolldown (Vite 8) does not apply package.json `exports` for these subpaths
      // when bundling workspace-linked packages; map them to concrete files.
      "react/compiler-runtime": path.join(reactPkg, "compiler-runtime.js"),
      "react/jsx-runtime": path.join(reactPkg, "jsx-runtime.js"),
      "react/jsx-dev-runtime": path.join(reactPkg, "jsx-dev-runtime.js"),
      "react-dom/client": path.join(reactDomPkg, "client.js"),
    },
  },
  build: {
    outDir: "../main/build/global-page",
    emptyOutDir: true,
  },
  base: "",
  server: {
    port: 3000,
  },
});
