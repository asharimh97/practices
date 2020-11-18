import styled from "styled-components";
import theme from "styles/theme";
import { BaseProp } from "./Base";
import Box from "./Box";

const Card = styled(Box)<BaseProp>``;

Card.defaultProps = {
  backgroundColor: "#fff",
  border: `solid 1px ${theme.colors.black[20]}`,
  borderRadius: "12px",
  p: 4
};

Card.displayName = "Card";

export default Card;
