import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "components/atoms";
import ListTask from "components/organisms/ListTask";

function App() {
  return (
    <Container>
      <ListTask />
    </Container>
  );
}

export default App;
