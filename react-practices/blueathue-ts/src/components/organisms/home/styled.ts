import styled, { css, up } from "@xstyled/styled-components";
import { colors } from "../../../styles/theme";
import { Flex, Text } from "../../atoms";

const HomeWrapper = styled(Flex)`
  height: 100vh;
  width: 100%;

  ${
    // @ts-ignore
    up(
      "md",
      css`
        background: linear-gradient(
            75.75deg,
            #ffffff 50.51%,
            rgba(255, 255, 255, 0) 113.77%
          ),
          url("/images/sky.jpg");
      `
    )
  }
`;

const Title = styled(Text)`
  background: -webkit-linear-gradient(
    147deg,
    ${colors["teal-blue"]},
    ${colors["sky-blue"]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: montserrat;
  font-weight: 500;
  font-size: 72px;
  line-height: 100%;
  letter-spacing: -0.1em;
`;

export { HomeWrapper, Title };
