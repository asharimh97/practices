import styled from "styled-components";
import { flexbox, FlexboxProps, system } from "styled-system";
import Base, { BaseProp } from "./Base";

type FlexProp = BaseProp &
  FlexboxProps & {
    direction?: string | Array<any>;
    align?: string | Array<any>;
    wrap?: string | Array<any>;
    justify?: string | Array<any>;
  };

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
