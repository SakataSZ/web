import type { Config } from "tailwindcss";
import { typography } from "./src/styles/typography";
import { catppuccinMocha, catppuccinLatte } from "./src/styles/themes/";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), typography],
  daisyui: {
    logs: false,
    themes: [{ light: catppuccinLatte }, { dark: catppuccinMocha }],
  },
} satisfies Config;
