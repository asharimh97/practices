import { getLetterMatchCount } from "../../helpers"
import { GUESS_WORD, CORRECT_GUESS } from "../actionTypes"

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: GUESS_WORD,
    payload: {
      guessedWord,
      letterMatchCount
    }
  });

  if (guessedWord === secretWord) {
    dispatch({
      type: CORRECT_GUESS
    });
  }
};
