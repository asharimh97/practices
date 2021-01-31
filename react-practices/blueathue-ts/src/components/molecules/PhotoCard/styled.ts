import styled, { x } from "@xstyled/styled-components";
import { colors } from "../../../styles/theme";

const { div: Div, img: Img } = x;

const Overlay = styled(Div)`
  align-items: flex-end;
  background: -webkit-linear-gradient(
    90deg,
    ${colors["teal-blue"] + "85"},
    transparent
  );
  bottom: 0;
  display: flex;
  height: 50%;
  left: 0;
  padding: 16px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 100%;

  p {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.2s ease-in-out;
    transition-delay: 0.5s;
  }
`;

const Card = styled(Div)`
  position: relative;

  &:hover {
    ${Overlay} {
      background: -webkit-linear-gradient(
        90deg,
        ${colors["teal-blue"] + "80"},
        transparent
      );
      height: 100%;

      p {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const Image = styled(Img)`
  width: 100%;
`;

export { Card, Image, Overlay };
