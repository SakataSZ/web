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
    extend: {
      colors: {
        rosewater: "var(--rosewater)",
        flamingo: "var(--flamingo)",
        pink: "var(--pink)",
        mauve: "var(--mauve)",
        red: "var(--red)",
        maroon: "var(--maroon)",
        peach: "var(--peach)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        teal: "var(--teal)",
        sky: "var(--sky)",
        sapphire: "var(--sapphire)",
        blue: "var(--blue)",
        lavender: "var(--lavender)",
      },
    },
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
