import { defaultTheme } from "@xstyled/styled-components";

export const fonts = {
  ...defaultTheme.fonts,
  body: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  montserrat: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", 
  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
};

export const colors = {
  ...defaultTheme.colors,
  "sky-blue": "#9FE2F1",
  "light-blue": "#48DBFB",
  "teal-blue": "#18CDCA"
};

const theme = {
  fonts,
  colors
};

export default theme;
