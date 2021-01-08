import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { Container, Flex, Grid } from "./atoms";
import Nav from "./molecules/Nav";

const Sample: React.FC = () => {
  return (
    <div>
      <Container>Sample component</Container>
      <Flex mb={4}>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </Flex>
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
