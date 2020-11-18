import "styled-components"
import { CSSObject, CSSProp } from "styled-components"
import theme from "./styles/theme"

// Declare type definition for styled components
// with theme prop applied to components
declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}