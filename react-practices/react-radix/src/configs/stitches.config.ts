import { margin, marginX, marginY, padding, paddingX, paddingY } from "./stitches-spacing.config";
import { createStitches } from "@stitches/react";
import {
  red,
  blue,
  green,
  slate,
  teal,
} from "@radix-ui/colors";

const { styled, css, createTheme, keyframes, theme, config } = createStitches({
  theme: {
    colors: {
      ...red,
      ...blue,
      ...green,
      ...slate,
      ...teal,
    }
  },
  prefix: "react-radix",
  media: {
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 992px)',
    xl: '@media (min-width: 1200px)'
  },
  utils: {
    m: margin,
    mx: marginX,
    marginX,
    my: marginY,
    marginY,
    p: padding,
    px: paddingX,
    paddingX,
    py: paddingY,
    paddingY
  }
});

export { styled, css, keyframes, createTheme, theme, config };