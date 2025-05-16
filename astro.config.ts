import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import netlify from "@astrojs/netlify";

export default defineConfig({
  // used to generate images
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  output: "static",
  adapter: netlify(),
});
