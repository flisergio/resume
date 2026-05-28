import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config: drop-in replacement for react-scripts.
// - plugin-react `include` covers .js because the codebase was bootstrapped
//   with CRA, which accepts JSX in .js files. Renaming every component file
//   to .jsx would be a large mechanical diff for no real benefit.
// - publicDir: keeps the existing public/ for static assets (logo, manifest).
// - build.outDir: keep "build/" so the existing `gh-pages -d build` and
//   netlify.toml `publish = "build"` continue to work.
// - Vitest is configured inline; jsdom + setup file replicate the old CRA
//   testing environment.
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{js,jsx}",
    }),
  ],
  // The component sources have JSX in .js files, so Vite's esbuild loader
  // also needs to know how to parse them outside of plugin-react's transform
  // (e.g. when esbuild runs as part of dependency optimisation).
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
  build: {
    outDir: "build",
  },
  // Vite's default asset list uses lowercase extensions; one image is .JPG.
  assetsInclude: ["**/*.JPG"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
    css: false,
    mockReset: false,
    clearMocks: false,
  },
});

