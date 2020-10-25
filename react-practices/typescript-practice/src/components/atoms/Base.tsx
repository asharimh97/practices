import styled from "styled-components"
import { border, BorderProps, color, ColorProps, compose, layout, LayoutProps, position, PositionProps, shadow, ShadowProps, space, SpaceProps } from "styled-system"

type Props = SpaceProps & ColorProps & BorderProps & LayoutProps & PositionProps & ShadowProps;

const Base = styled("div")<Props>(
  compose(
    border,
    color,
    layout,
    position,
    shadow,
    space,
  )
);

Base.displayName = "Base";

export default Base;