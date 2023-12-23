import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  site: "https://sakatasz.com",
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "rose-pine",
    },
  },
});
