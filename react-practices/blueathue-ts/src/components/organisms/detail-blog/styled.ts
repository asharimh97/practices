import styled, { css, up } from "@xstyled/styled-components";
import { Box } from "../../atoms";

const ImageWrapper = styled(Box)`
  aspect-ratio: 1 / 1;
  position: relative;
  max-height: 450px;
  margin: -16px;
  margin-top: -64px;
  margin-bottom: 32px;
  width: calc(100% + 48px);
  z-index: 1;

  ${
    // @ts-ignore
    up(
      "md",
      css`
        aspect-ratio: unset;
        height: 100vh;
        margin: -32px;
        margin-top: -64px;
        margin-bottom: 32px;
      `
    )
  }

  ${
    // @ts-ignore
    up(
      "lg",
      css`
        margin-top: -32px;
        width: calc(100% + 64px);
      `
    )
  }
`;

export { ImageWrapper };
