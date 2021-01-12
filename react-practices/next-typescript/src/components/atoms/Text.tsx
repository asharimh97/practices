import styled, { css, CSSObject } from "styled-components";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps
} from "styled-system";
import theme from "styles/theme";
import { StringNumberOrArray } from "../../../@types/general";

export interface TextProp
  extends TypographyProps,
    ColorProps,
    SpaceProps,
    LayoutProps {
  as?: string;
  theme?: typeof theme | any;

  bold?: boolean;
  medium?: boolean;
  semibold?: boolean;
  regular?: boolean;
  light?: boolean;

  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;

  small?: boolean;

  tight?: boolean;
  truncate?: boolean;

  weight?: StringNumberOrArray;
  align?: StringNumberOrArray;
  family?: StringNumberOrArray;
  spacing?: StringNumberOrArray;
}

// Custom key prop / aliasing a prop
const textConfig: Record<string, any> = {
  weight: { property: "fontWeight" },
  align: { property: "textAlign" },
  family: { property: "fontFamily" },
  spacing: { property: "letterSpacing" }
};

const bold = ({ bold, theme }: TextProp) =>
  bold &&
  css`
    font-family: "Proxima Nova Bold", ${theme.font};
    font-weight: ${theme.bold};
  `;

const semibold = css`
  font-weight: ${({ semibold, theme }: TextProp) => semibold && theme.semibold};
`;

const medium = css`
  font-weight: ${({ medium, theme }: TextProp) => medium && theme.medium};
`;

const capitalize = css`
  text-transform: ${({ capitalize }: TextProp) => capitalize && "capitalize"};
`;

const uppercase = css`
  text-transform: ${({ uppercase }: TextProp) => uppercase && "uppercase"};
`;

const lowercase = css`
  text-transform: ${({ lowercase }: TextProp) => lowercase && "lowercase"};
`;

const truncate = ({ truncate }: TextProp) =>
  truncate &&
  css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
  `;

const small = css`
  font-size: ${({ small, theme }: TextProp) => small && theme.fontSizes[0]};
`;

const tight = ({ tight }: TextProp) =>
  tight &&
  css`
    margin-top: 0;
    margin-bottom: 0;
  `;

const Text = styled.p<TextProp>`
  ${color}
  ${layout}
  ${space}
  ${typography}

  ${small};

  ${bold};
  ${semibold};
  ${medium};

  ${capitalize};
  ${uppercase};
  ${lowercase};

  ${truncate};
  ${tight};

  ${system(textConfig)};
`;

Text.defaultProps = {
  fontSize: 1,
  lineHeight: "1.65",
  mb: "1.05em"
};

Text.displayName = "Text";

export default Text;
