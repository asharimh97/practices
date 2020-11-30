import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

const Input = styled.input`
  border: solid 1px ${themeGet("colors.black.40")};
  border-radius: 8px;
  display: block;
  margin: 8px 0;
  padding: 8px;
  width: -webkit-fill-available;
`;

export default Input;
