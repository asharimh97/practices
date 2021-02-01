import styled from "@xstyled/styled-components";

const Wrapper = styled.div``;

const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  margin-bottom: 4;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-position: center;
    object-fit: cover;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export { Wrapper, ImageWrapper };
