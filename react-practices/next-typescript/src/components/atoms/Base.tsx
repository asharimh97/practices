import styled from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from "styled-system";

export interface BaseProp
  extends SpaceProps,
    BorderProps,
    LayoutProps,
    ColorProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    TypographyProps {}

// export type BaseProp = SpaceProps &
//   BorderProps &
//   LayoutProps &
//   ColorProps &
//   BackgroundProps &
//   PositionProps &
//   ShadowProps &
// TypographyProps;

const Base = styled.div<BaseProp>`
  ${background}
  ${border}
  ${color}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${typography}
`;

Base.displayName = "Base";

export default Base;
