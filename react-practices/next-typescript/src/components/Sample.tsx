import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { Container, Flex, Grid } from "./atoms";
import Nav from "./molecules/Nav";

const Sample: React.FC = () => {
  return (
    <div>
      <Container>Sample component</Container>
      <Flex>
        <Nav href="/" icon={IoIosAirplane}>
          Sample Nav
        </Nav>
        <Nav href="/" icon={IoIosAirplane}>
          Sample Nav
        </Nav>
        <Nav href="/" icon={IoIosAirplane}>
          Sample Nav
        </Nav>
        <Nav href="/" icon={IoIosAirplane}>
          Sample Nav
        </Nav>
      </Flex>
    </div>
  );
};

export default Sample;
