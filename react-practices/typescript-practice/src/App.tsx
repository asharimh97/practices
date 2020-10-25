import React from 'react';
import Header from "./components/Header";
import logo from './logo.svg';
import './App.css';
import Base from './components/atoms/Base';

function App() {
  return (
    <>
    <Base data-test="base-component" py={2} color="white" backgroundColor="maroon">
      <Header bordered pb={4}>
        Lorem ipsum
      </Header>
      <p>Lorem ipsum dolorsit amet</p>
    </Base>
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
          Learn React using typescript
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
