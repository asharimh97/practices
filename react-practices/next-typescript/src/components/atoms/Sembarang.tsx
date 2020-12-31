import styled from "@xstyled/styled-components";
import { th, background, space, compose } from "@xstyled/system";
import { getSystemPropTypes } from "@xstyled/prop-types";

const SembarangProp = compose(background, space);

const Sembarang = styled.div`
  background-color: ${th.color("black.40")};
  color: white;
  padding: 2 4;
  ${background};
  ${space};
`;

Sembarang.propTypes = getSystemPropTypes(SembarangProp);

export default Sembarang;
