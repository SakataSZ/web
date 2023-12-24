import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkCodeTitle from "remark-code-titles";

const env = process.env.NODE_ENV;
const siteUrl = {
  development: "http://localhost:4321",
  preview: "https://sakatasz-dev.vercel.app",
  production: "https://sakatasz.com",
};
console.log(`[astro.config] env: ${env}`);

export default defineConfig({
  server: { host: "0.0.0.0" },
  site: siteUrl[env],
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkCodeTitle],
    shikiConfig: { theme: "css-variables" },
  },
});
