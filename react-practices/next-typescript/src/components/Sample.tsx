import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { Container, Flex, Grid } from "./atoms";
import Sembarang from "./atoms/Sembarang";
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
      <Sembarang mx="14px">
        X styled enggak cocok untuk project berbasis typescript, type
        definitionnya belum lengkap, hmm
      </Sembarang>
    </div>
  );
};

export default Sample;
