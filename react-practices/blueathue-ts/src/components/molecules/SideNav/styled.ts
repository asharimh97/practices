import styled, { x } from "@xstyled/styled-components";

const Aside = x.aside;

const Wrapper = styled(Aside)`
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { Wrapper };
