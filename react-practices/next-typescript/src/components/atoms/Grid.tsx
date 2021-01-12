import styled from "styled-components";
import { grid, GridProps, system } from "styled-system";
import { StringNumberOrArray } from "../../../@types/general";
import Base, { BaseProp } from "./Base";

interface GridProp extends BaseProp, GridProps {
  columns?: StringNumberOrArray;
  gap?: StringNumberOrArray;
  rows?: StringNumberOrArray;
}

const gridConfig: Record<string, any> = {
  columns: { property: "gridTemplateColumns" },
  gap: { property: "gridGap" },
  rows: { property: "gridTemplateRows" }
};

const Grid = styled(Base)<GridProp>`
  display: grid;
  ${grid}
  ${system(gridConfig)};
`;

Grid.displayName = "Grid";

export default Grid;
