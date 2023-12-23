import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "rose-pine",
    },
  },
  output: "hybrid",
  adapter: vercel({
    webAnalytics: true,
  }),
});
