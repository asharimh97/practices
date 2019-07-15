import { GUESS_WORD } from "../actionTypes"
const initialState = [];

const guessedWordsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GUESS_WORD:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default guessedWordsReducer
