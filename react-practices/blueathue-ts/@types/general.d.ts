import {
  BordersProps,
  ColorProps,
  ITheme,
  LayoutProps,
  SizingProps,
  SpaceProps,
  Theme,
  TransitionProps
} from "@xstyled/styled-components";

export interface AnyComponentProp {
  [key: string]: any;
}

export type BaseStyledComponentProp<T extends ITheme = Theme> = SpaceProps<T> &
  LayoutProps<T> &
  ColorProps<T> &
  TransitionProps<T> &
  SizingProps<T> &
  BordersProps<T>;
