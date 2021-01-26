import { defaultTheme } from "@xstyled/styled-components";

export const fonts = {
  ...defaultTheme.fonts,
  body: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  montserrat: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", 
  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
};

const theme = {
  fonts
};

export default theme;
