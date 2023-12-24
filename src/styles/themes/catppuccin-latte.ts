const palette = {
  rosewater: "#dc8a78",
  flamingo: "#dd7878",
  pink: "#ea76cb",
  mauve: "#8839ef",
  red: "#d20f39",
  maroon: "#e64553",
  peach: "#fe640b",
  yellow: "#df8e1d",
  green: "#40a02b",
  teal: "#179299",
  sky: "#04a5e5",
  sapphire: "#209fb5",
  blue: "#1e66f5",
  lavender: "#7287fd",
  text: "#4c4f69",
  subtext1: "#5c5f77",
  subtext0: "#6c6f85",
  overlay2: "#7c7f93",
  overlay1: "#8c8fa1",
  overlay0: "#9ca0b0",
  surface2: "#acb0be",
  surface1: "#bcc0cc",
  surface0: "#ccd0da",
  base: "#eff1f5",
  mantle: "#e6e9ef",
  crust: "#dce0e8",
};

export const catppuccinLatte = {
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
