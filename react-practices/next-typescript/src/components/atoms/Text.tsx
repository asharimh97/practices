import styled, { css } from "styled-components";
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

export type TextProp = {
  as?: any;
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

  weight?: string | number | Array<any>;
  align?: string | Array<any>;
  family?: string | Array<any>;
  spacing?: string | number | Array<any>;
} & TypographyProps &
  ColorProps &
  SpaceProps &
  LayoutProps;

// Custom key prop / aliasing a prop
const textConfig: Record<string, any> = {
  weight: { property: "fontWeight" },
  align: { property: "textAlign" },
  family: { property: "fontFamily" },
  spacing: { property: "letterSpacing" }
};

const bold = css`
  font-family: ${(props: TextProp) =>
    props.bold && `"Proxima Nova Bold", ${props.theme.font}`};
  font-weight: ${(props: TextProp) => props.bold && props.theme.bold};
`;

const semibold = css`
  font-weight: ${(props: TextProp) => props.semibold && props.theme.semibold};
`;

const medium = css`
  font-weight: ${(props: TextProp) => props.medium && props.theme.medium};
`;

const capitalize = css`
  text-transform: ${(props: TextProp) => props.capitalize && "capitalize"};
`;

const uppercase = css`
  text-transform: ${(props: TextProp) => props.uppercase && "uppercase"};
`;

const lowercase = css`
  text-transform: ${(props: TextProp) => props.lowercase && "lowercase"};
`;

const truncate = (props: TextProp) =>
  props.truncate &&
  css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
  `;

const small = css`
  font-size: ${(props: TextProp) => props.small && props.theme.fontSizes[0]};
`;

const tight = (props: TextProp) =>
  props.tight &&
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
