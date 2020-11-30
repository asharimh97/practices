import styled from "styled-components";
import Text, { TextProp } from "./Text";

type LabelProps = TextProp & {
  htmlFor?: string;
};

const Label = styled(Text).attrs({
  as: "label",
  fontSize: 0,
  semibold: true,
  color: "black.primary"
})<LabelProps>``;

export default Label;
