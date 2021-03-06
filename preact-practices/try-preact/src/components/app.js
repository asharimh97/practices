import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Lorem from "../routes/lorem";

import "../style/app.css";
import { RecoilRoot } from "recoil";

const App = () => (
  <RecoilRoot>
    <div id="app">
      <Header />
      <div class="container mt-12 p-5">
        <Router>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
          <Lorem path="/lorem" />
        </Router>
      </div>
    </div>
  </RecoilRoot>
);

export default App;
