import { GridsProps, style, x } from "@xstyled/styled-components";
import { BaseStyledComponentProp } from "../../../@types/general";

const gridProps = [
  { prop: "column", css: "gridTemplateColumns" },
  { prop: "row", css: "gridTemplateRows" },
  { prop: "gap", css: "gridGap" }
];

const mappedGridProps = gridProps.map(({ prop, css }) =>
  style({ prop, cssProperty: css })
);

const Comp = x.extend(...mappedGridProps);

interface GridProp extends BaseStyledComponentProp, GridsProps {
  column?: string | object | string[] | number | number[];
  row?: string | object | string[] | number | number[];
}

const Grid: React.FC<GridProp> = props => {
  // eslint-disable-next-line react/jsx-pascal-case
  return <Comp.div {...props} display="grid" />;
};

export default Grid;
