import styled, { css, up } from "@xstyled/styled-components";

const NavWrapper = styled.div`
  background-color: cool-gray-100;
  border-radius: md;
  font-size: 2xl;
  padding: 4px;
  position: fixed;
  right: 12px;
  top: 12px;

  ${
    // @ts-ignore
    up(
      "md",
      css`
        display: none;
      `
    )
  }
`;

interface WrapperProp {
  show: boolean;
  [key: string]: any;
}

const Wrapper = styled.div<WrapperProp>`
  align-items: center;
  background-color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  left: -100%;
  position: fixed;
  transition: all 0.3s ease-in-out;
  width: 100%;

  ${
    //@ts-ignore
    ({ show }) =>
      show &&
      css`
        left: 0;
      `
  }

  ${
    // @ts-ignore
    up(
      "md",
      css`
        display: none;
      `
    )
  }

  a {
    text-decoration: none;
  }
`;

const CloseIcon = styled.div`
  cursor: pointer;
  font-size: 3xl;
  padding: 4px;
  position: absolute;
  right: 12px;
  top: 12px;
`;

export { NavWrapper, Wrapper, CloseIcon };
