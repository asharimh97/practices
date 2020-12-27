/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
const createMediaQuery = (n: String) => `@media screen and (min-width:${n})`;

const addAliases = (arr: Array<String>, aliases: Array<String>) =>
  aliases.forEach((key: any, i: any) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

const breakpoints: Array<String> = ["426px", "768px", "992px", "1200px"];

const mediaQueries: Array<String> = breakpoints.map(createMediaQuery);

const aliases: Array<String> = ["sm", "md", "lg", "xl"];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);
const font: String = `"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;

// this font size scaling follows styled-system standard
// however we can't change the standard scaling, theme will always return
// this sequence `[12, 14, 16, 20, 24, 32, 48]` even if we try to shift
// some values between the scales.
const fontSizes: Array<String> = [
  "0.8em",
  "1em",
  "1.25em",
  "1.563em",
  "1.953em",
  "2.441em",
  "3.052em"
];

const light: Number = 300;
const regular: Number = 400;
const medium: Number = 500;
const semibold: Number = 600;
const bold: Number = 700;
const fontWeights: Object = {
  light,
  regular,
  medium,
  semibold,
  bold
};

const colors: Record<string, Record<string, string>> = {
  black: {
    100: "#25282B",
    80: "#8e8e93",
    60: "#C4C4C4",
    40: "#CACCCF",
    20: "#E4E4E4",
    10: "#E5E5E5",
    5: "#FAFAFA",
    primary: "#25282B",
    secondary: "#8e8e93"
  },
  orange: {
    100: "#1a0e00",
    90: "#4d2a00",
    80: "#804600",
    70: "#b36200",
    60: "#e67e00",
    50: "#ff981a",
    40: "#ffaf4d",
    30: "#ffc680",
    20: "#ffddb3",
    10: "#fff4e5",
    primary: "#e67e00",
    secondary: "#ff981a"
  },
  red: {
    100: "#190002",
    90: "#4c0107",
    80: "#7e010b",
    70: "#b00210",
    60: "#e30315",
    50: "#fc1c2e",
    40: "#fd4f5d", // primary
    30: "#fe818b",
    20: "#feb3b9",
    10: "#ffe6e8",
    primary: "#fd4f5d",
    secondary: "#fe818b"
  },
  green: {
    100: "#04160c",
    90: "#0b4125",
    80: "#126d3d",
    70: "#1a9956",
    60: "#21c46e", // primary
    50: "#3bde88",
    40: "#66e5a2",
    30: "#92edbd",
    20: "#bef4d7",
    10: "#e9fbf2",
    primary: "#21c46e",
    secondary: "#3bde88"
  },
  blue: {
    100: "#001119",
    90: "#01344c",
    80: "#02577e",
    70: "#027ab0",
    60: "#039de3",
    50: "#1cb7fc",
    40: "#4fc7fd",
    30: "#81d7fd",
    20: "#b3e7fe",
    10: "#e6f7ff",
    primary: "#039de3",
    secondary: "#1cb7fc"
  }
};

// in this new spacing standard index `0` stands for 0 margin/padding
const space: Array<Number> = [0, 4, 8, 16, 24, 32, 40, 64, 128, 256, 512];

const shadows: Array<String> = [
  `0 1px 1px 0 rgba(10, 31, 68, 0.08), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`,
  `0 18px 18px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 26px 26px 0 rgba(10, 31, 68, 0.12), 0 0 1px 0 rgba(10, 31, 68, 0.1)`,
  `0 3px 32px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)`
];

export default {
  bold,
  breakpoints,
  colors,
  font,
  fontSizes,
  fontWeights,
  light,
  mediaQueries,
  medium,
  regular,
  semibold,
  shadows,
  space
};
