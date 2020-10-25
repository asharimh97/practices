import React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";

type Props = {
  active?: boolean;
  bordered?: boolean;
} & SpaceProps;

const Heading = styled.h1<Props>`
  color: ${props => props.active ? props.theme.colors.green[60] : props.theme.colors.red[40]};

  ${props => props.bordered && css`
    border-bottom: solid 1px #000;
  `}
  ${space}
`;

const Header:React.FC<Props> = props => {
  return (
    <div>
      <Heading {...props}>
        Halo ini headernya guis
      </Heading>
    </div>
  )
}

export default Header;
