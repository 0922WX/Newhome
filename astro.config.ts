import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import netlify from "@astrojs/netlify";

export default defineConfig({
  // used to generate images
  site: "https://WxBlog.netlify.app",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  build: {
    format: "directory",
  },
  output: "static",
  adapter: netlify(),
});
