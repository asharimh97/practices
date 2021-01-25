import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  style,
  TypographyProps,
  x
} from "@xstyled/styled-components";
import { BaseStyledComponentProp } from "../../../@types/general";

const textProps = [
  { prop: "weight", cssProperty: "fontWeight", themeGet: getFontWeight },
  { prop: "size", cssProperty: "fontSize", themeGet: getFontSize },
  { prop: "spacing", cssProperty: "letterSpacing", themeGet: getLetterSpacing },
  { prop: "height", cssProperty: "lineHeight", themeGet: getLineHeight }
] as const;

const shortenTextProps = [
  {
    prop: "italic",
    cssProperty: () => ({
      fontStyle: "italic"
    })
  },
  {
    prop: "uppercase",
    cssProperty: () => ({
      textTransform: "uppercase"
    })
  },
  {
    prop: "lowercase",
    cssProperty: () => ({ textTransform: "lowercase" })
  },
  {
    prop: "capitalize",
    cssProperty: () => ({ textTransform: "capitalize" })
  }
] as const;

const mappedTextProps = [...textProps, ...shortenTextProps].map(item =>
  style({ ...item })
);

type CustomTextProp = {
  [K in typeof textProps[number]["prop"]]?: string | number | object;
};

type CustomShortenTextProp = {
  [K in typeof shortenTextProps[number]["prop"]]?: boolean;
};

const Comp = x.extend(...mappedTextProps);

interface TextProp
  extends Omit<BaseStyledComponentProp, "size" | "height">,
    TypographyProps,
    CustomShortenTextProp,
    CustomTextProp {
  [key: string]: any;
}

const Text: React.FC<TextProp> = props => {
  return <Comp.p {...props} />;
};

export default Text;
