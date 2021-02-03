import { createGlobalStyle } from "@xstyled/styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    font-family: ${theme.fonts.alice}
  }
`;

export default GlobalStyles;
