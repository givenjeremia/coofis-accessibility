import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"production"',
  },

  plugins: [
    react(),
    svgr(),
  ],

  build: {
    minify: false,

    lib: {
      entry: resolve(__dirname, "lib/umd.ts"),
      name: "CoofisAccessibility",
      formats: ["umd"],
      fileName: () => "coofis-accessibility.js",
    },

    emptyOutDir: false,

    rollupOptions: {
      output: {
        banner:
          'window.process=window.process||{env:{NODE_ENV:"production"}};',
      },
    },
  },
});
