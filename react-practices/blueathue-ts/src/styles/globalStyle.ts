import { createGlobalStyle } from "@xstyled/styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${theme.fonts.body}
  }
`;

export default GlobalStyles;
