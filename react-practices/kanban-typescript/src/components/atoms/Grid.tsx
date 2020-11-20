import styled from "styled-components";
import { grid, GridProps, system } from "styled-system";
import Base, { BaseProp } from "./Base";

type GridProp = BaseProp &
  GridProps & {
    columns?: string | Array<any>;
    gap?: string | number | Array<any>;
    rows?: string | Array<any>;
  };

const gridConfig: Record<string, any> = {
  columns: { property: "gridTemplateColumns" },
  gap: { property: "gridGap", scale: "space" },
  rows: { property: "gridTemplateRows" }
};

const Grid = styled(Base)<GridProp>`
  display: grid;
  ${grid}
  ${system(gridConfig)};
`;

Grid.displayName = "Grid";

export default Grid;
