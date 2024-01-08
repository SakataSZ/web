import plugin from "tailwindcss/plugin";

const title: TypographyClassNames = {
  ".font-title-xxl": {
    "font-size": "57px",
    "font-weight": "700",
    "line-height": "1.4",
  },
  ".font-title-xl": {
    "font-size": "45px",
    "font-weight": "700",
    "line-height": "1.4",
  },
  ".font-title-lg-pc": {
    "font-size": "36px",
    "font-weight": "700",
    "line-height": "1.4",
  },
  ".font-title-md-pc": {
    "font-size": "32px",
    "font-weight": "700",
    "line-height": "1.5",
  },
  ".font-title-sm-pc": {
    "font-size": "28px",
    "font-weight": "700",
    "line-height": "1.5",
  },
  ".font-title-xs-pc": {
    "font-size": "24px",
    "font-weight": "700",
    "line-height": "1.5",
  },
  ".font-title-xxs-pc": {
    "font-size": "20px",
    "font-weight": "700",
    "line-height": "1.5",
  },
  ".font-title-lg-sp": {
    "font-size": "32px",
    "font-weight": "700",
    "line-height": "1.4",
  },
  ".font-title-md-sp": {
    "font-size": "28px",
    "font-weight": "700",
    "line-height": "1.5",
  },
  ".font-title-sm-sp": {
    "font-size": "24px",
    "font-weight": "700",
    "line-height": "1.5",
  },
  ".font-title-xs-sp": {
    "font-size": "20px",
    "font-weight": "700",
    "line-height": "1.5",
  },
  ".font-title-xxs-sp": {
    "font-size": "16px",
    "font-weight": "700",
    "line-height": "1.7",
  },
};

const heading: HeadingClassNames = {
  ".font-h1-pc": {
    ...title[".font-title-lg-pc"]!,
    "margin-top": "64px",
    "margin-bottom": "24px",
    "font-family":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  ".font-h2-pc": {
    ...title[".font-title-md-pc"]!,
    "margin-top": "64px",
    "margin-bottom": "24px",
    "font-family":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  ".font-h3-pc": {
    ...title[".font-title-sm-pc"]!,
    "margin-top": "40px",
    "margin-bottom": "24px",
    "font-family":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  ".font-h4-pc": {
    ...title[".font-title-xs-pc"]!,
    "margin-top": "40px",
    "margin-bottom": "16px",
  },
  ".font-h5-pc": {
    ...title[".font-title-xxs-pc"]!,
    "margin-top": "40px",
    "margin-bottom": "16px",
  },
  ".font-h1-sp": {
    ...title[".font-title-lg-sp"]!,
    "margin-top": "64px",
    "margin-bottom": "24px",
    "font-family":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  ".font-h2-sp": {
    ...title[".font-title-md-sp"]!,
    "margin-top": "64px",
    "margin-bottom": "24px",
    "font-family":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  ".font-h3-sp": {
    ...title[".font-title-sm-sp"]!,
    "margin-top": "40px",
    "margin-bottom": "24px",
    "font-family":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  ".font-h4-sp": {
    ...title[".font-title-xs-sp"]!,
    "margin-top": "40px",
    "margin-bottom": "16px",
  },
  ".font-h5-sp": {
    ...title[".font-title-xxs-sp"]!,
    "margin-top": "40px",
    "margin-bottom": "16px",
  },
};

const body: TypographyClassNames = {
  ".font-body-lg": {
    "font-size": "16px",
    "font-weight": "500",
    "line-height": "1.7",
  },
  ".font-body-md": {
    "font-size": "14px",
    "font-weight": "500",
    "line-height": "1.7",
  },
};

const math: TypographyClassNames = {
  ".font-math-md": {
    "font-size": "14px",
    "font-weight": "500",
    "line-height": "1.7",
  },
  ".font-math-sm": {
    "font-size": "12px",
    "font-weight": "500",
    "line-height": "1.7",
  },
};

const typographyClassNames: TypographyClassNames = {
  ...title,
  ...heading,
  ...body,
  ...math,
};

export const typography = plugin((api) => {
  api.addUtilities(typographyClassNames);
});
