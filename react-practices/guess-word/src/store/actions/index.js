import { CORRECT_GUESS } from "../actionTypes"
export * from "./guessedWordsActions";
export * from "./secretWordActions";

export const correctGuess = () => {
  return {
    type: CORRECT_GUESS
  }
};
