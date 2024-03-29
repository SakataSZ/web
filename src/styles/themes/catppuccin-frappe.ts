const palette = {
  rosewater: "#f2d5cf",
  flamingo: "#eebebe",
  pink: "#f4b8e4",
  mauve: "#ca9ee6",
  red: "#e78284",
  maroon: "#ea999c",
  peach: "#ef9f76",
  yellow: "#e5c890",
  green: "#a6d189",
  teal: "#81c8be",
  sky: "#99d1db",
  sapphire: "#85c1dc",
  blue: "#8caaee",
  lavender: "#babbf1",
  text: "#c6d0f5",
  subtext1: "#b5bfe2",
  subtext0: "#a5adce",
  overlay2: "#949cbb",
  overlay1: "#838ba7",
  overlay0: "#737994",
  surface2: "#626880",
  surface1: "#51576d",
  surface0: "#414559",
  base: "#303446",
  mantle: "#292c3c",
  crust: "#232634",
};

export const catppuccinFrappe = {
  primary: palette.mauve,
  "primary-content": palette.base,
  secondary: palette.sapphire,
  "secondary-content": palette.base,
  accent: palette.teal,
  "accent-content": palette.base,
  neutral: palette.overlay0,
  "neutral-content": palette.base,
  "base-100": palette.base,
  "base-200": palette.mantle,
  "base-300": palette.crust,
  "base-content": palette.text,
  info: palette.sky,
  "info-content": palette.base,
  success: palette.green,
  "success-content": palette.base,
  warning: palette.yellow,
  "warning-content": palette.base,
  error: palette.red,
  "error-content": palette.base,
  "--rosewater": palette.rosewater,
  "--flamingo": palette.flamingo,
  "--pink": palette.pink,
  "--mauve": palette.mauve,
  "--red": palette.red,
  "--maroon": palette.maroon,
  "--peach": palette.peach,
  "--yellow": palette.yellow,
  "--green": palette.green,
  "--teal": palette.teal,
  "--sky": palette.sky,
  "--sapphire": palette.sapphire,
  "--blue": palette.blue,
  "--lavender": palette.lavender,
} satisfies DaisyUIPalette & CatppuccinoPalette;
