import React from 'react';
import './App.css';

import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Congrats success />
      <Input />
      <GuessedWords guessedWords={[ {guessedWord: "lorem", letterMatchCount: 1} ]} />
    </div>
  );
}

export default App;
