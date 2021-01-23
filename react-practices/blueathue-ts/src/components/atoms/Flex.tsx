import { FlexboxesProps, style, x } from "@xstyled/styled-components";
import { BaseStyledComponentProp } from "../../../@types/general";

const flexProps = [
  {
    prop: "align",
    css: "alignItems"
  },
  {
    prop: "justify",
    css: "justifyContent"
  },
  {
    prop: "direction",
    css: "flexDirection"
  }
];

const mappedFlexProps = flexProps.map(({ prop, css }) =>
  style({ prop, cssProperty: css })
);

const Comp = x.extend(...mappedFlexProps);

interface FlexProp extends FlexboxesProps, BaseStyledComponentProp {
  children?: React.ReactNode;
  align?: string | object | string[] | number | number[];
  justify?: string | object | string[] | number | number[];
  direction?: string | object | string[] | number | number[];
  [key: string]: any;
}

const Flex: React.FC<FlexProp> = props => {
  return <Comp.div {...props} display="flex" />;
};

export default Flex;
