const palette = {
  rosewater: "#f4dbd6",
  flamingo: "#f0c6c6",
  pink: "#f5bde6",
  mauve: "#c6a0f6",
  red: "#ed8796",
  maroon: "#ee99a0",
  peach: "#f5a97f",
  yellow: "#eed49f",
  green: "#a6da95",
  teal: "#8bd5ca",
  sky: "#91d7e3",
  sapphire: "#7dc4e4",
  blue: "#8aadf4",
  lavender: "#b7bdf8",
  text: "#cad3f5",
  subtext1: "#b8c0e0",
  subtext0: "#a5adcb",
  overlay2: "#939ab7",
  overlay1: "#8087a2",
  overlay0: "#6e738d",
  surface2: "#5b6078",
  surface1: "#494d64",
  surface0: "#363a4f",
  base: "#24273a",
  mantle: "#1e2030",
  crust: "#181926",
};

export const catppuccinMacchiato = {
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
