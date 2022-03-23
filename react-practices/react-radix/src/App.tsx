import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from "./configs/stitches.config";

const Button = styled("button", {
  background: "$red9",
  color: "white",
  border: "none",
  borderRadius: "5px",
  p: "12px",
  my: "20px",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Hello</Button>
      </header>
    </div>
  );
}

export default App;
