import React, { Component } from 'react';
import logo from './logo.svg';
// import { GEditor } from "grapesjs-react";
import "grapesjs/dist/css/grapes.min.css"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.editor = "";
  }

  componentDidMount() {
    const grapesjs = require("grapesjs");
    console.log(grapesjs);
    this.editor = grapesjs.init({
      container: "#gjs"
    })

    grapesjs.init({ container: "#sjg" });
    console.log(this.editor, grapesjs);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div id="gjs" />
        <div id="sjg" />
      </div>
    );
  }
}

export default App;
