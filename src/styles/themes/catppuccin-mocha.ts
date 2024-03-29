const palette = {
  rosewater: "#f5e0dc",
  flamingo: "#f2cdcd",
  pink: "#f5c2e7",
  mauve: "#cba6f7",
  red: "#f38ba8",
  maroon: "#eba0ac",
  peach: "#fab387",
  yellow: "#f9e2af",
  green: "#a6e3a1",
  teal: "#94e2d5",
  sky: "#89dceb",
  sapphire: "#74c7ec",
  blue: "#89b4fa",
  lavender: "#b4befe",
  text: "#cdd6f4",
  subtext1: "#bac2de",
  subtext0: "#a6adc8",
  overlay2: "#9399b2",
  overlay1: "#7f849c",
  overlay0: "#6c7096",
  surface2: "#585b70",
  surface1: "#45475a",
  surface0: "#313244",
  base: "#1e1e2e",
  mantle: "#181825",
  crust: "#11111b",
};

export const catppuccinMocha = {
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
