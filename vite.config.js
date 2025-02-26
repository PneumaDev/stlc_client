import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true, // This will log stats during the optimization
  ansiColors: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // Important for SVG scaling issues
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  png: {
    quality: 70,
  },
  jpeg: {
    quality: 70,
  },
  jpg: {
    quality: 70,
  },
  tiff: {
    quality: 70,
  },
  gif: {},
  webp: {
    lossless: true,
  },
  avif: {
    lossless: true,
  },
  cache: true, // Disable caching
  cacheLocation: "/",
  // Custom log function to output stats
  onOptimized: (stats) => {
    console.log("Optimization Stats:", stats);
  },
};

export default defineConfig({
  server: {
  },
  plugins: [
    react(),
    ViteImageOptimizer({ ...DEFAULT_OPTIONS }), // Spread DEFAULT_OPTIONS into the plugin
  ],
  resolve: {
    alias: {
      "@emotion/react": "@emotion/react", // Alias for emotion/react
      "@emotion/styled": "@emotion/styled", // Alias for emotion/styled
    },
  },
  build: {
    outDir: "dist", // Output directory for build files
  },
});
