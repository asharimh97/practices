import React, { Component } from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  return (
    <div data-test="component-guessed-words">
      {props.guessedWords.length === 0 && (
        <p data-test="component-instruction">Try to guess the secret word</p>
      )}
    </div>
  )
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
