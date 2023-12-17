type Weight = "500" | "700";
type TypographyProperties = {
  "font-size": string;
  "font-weight": Weight;
  "line-height": string;
  "letter-spacing"?: string;
  "font-family"?: string;
};

type Type = "title" | "body";
type size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type Device = "sp" | "pc";

type TypographyClassName = `.font-${Type}-${size}` | `.font-${Type}-${size}-${Device}`;

type TypographyClassNames = {
  [key in TypographyClassName]?: TypographyProperties;
};

type Heading = "h1" | "h2" | "h3" | "h4" | "h5";
type HeadingProperties = TypographyProperties & {
  "margin-top": string;
  "margin-bottom": string;
};

type HeadingClassName = `.font-${Heading}-${Device}`;
type HeadingClassNames = {
  [key in HeadingClassName]?: HeadingProperties;
};
