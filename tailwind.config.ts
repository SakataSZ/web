import type { Config } from "tailwindcss";
import { typography } from "./src/styles/typography";
import {
  catppuccinLatte,
  catppuccinFrappe,
  catppuccinMacchiato,
  catppuccinMocha,
} from "./src/styles/themes/";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), typography],
  daisyui: {
    logs: false,
    themes: [
      { light: catppuccinLatte },
      { dark: catppuccinMacchiato },
      { frappe: catppuccinFrappe },
      { mocha: catppuccinMocha },
    ],
  },
} satisfies Config;
