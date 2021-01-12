import styled from "styled-components";
import { flexbox, FlexboxProps, system } from "styled-system";
import { StringNumberOrArray } from "../../../@types/general";
import Base, { BaseProp } from "./Base";

interface FlexProp extends BaseProp, FlexboxProps {
  direction?: StringNumberOrArray;
  align?: StringNumberOrArray;
  wrap?: StringNumberOrArray;
  justify?: StringNumberOrArray;
}

const flexConfig: Record<string, any> = {
  direction: {
    property: "flexDirection"
  },
  align: {
    property: "alignItems"
  },
  wrap: {
    property: "flexWrap"
  },
  justify: {
    property: "justifyContent"
  }
};

const Flex = styled(Base)<FlexProp>`
  display: flex;
  ${flexbox}
  ${system(flexConfig)};
`;

Flex.displayName = "Flex";

export default Flex;
