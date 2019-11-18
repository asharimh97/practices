import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  return (
    <div data-test="component-guessed-words">
      {props.guessedWords.length === 0 ? (
        <p data-test="component-instruction">Try to guess the secret word</p>
      ) : (
        <div data-test="guessed-words">
          <h4>Guessed words</h4>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching letters</th>
              </tr>
            </thead>
            <tbody>
              {props.guessedWords.map((word, idx) => (
                <tr key={idx} data-test="guessed-word">
                  <td>{idx + 1}</td>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>Total guess: {props.guessedWords.length}</div>
        </div>
      )}
    </div>
  );
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
