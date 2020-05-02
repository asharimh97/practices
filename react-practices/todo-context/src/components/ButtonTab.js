import styled from "styled-components";
import { background, color } from "styled-system";

const ButtonTab = styled.button`
  ${background}
  border: none;
  border-radius: 3px;
  ${color}
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;
  padding: 4px;

  &:last-child {
    margin-right: 0px;
  }
`;

export default ButtonTab;