import {combineReducers} from "redux";

import successReducer from "./successReducer";
import guessedWordsReducer from "./guessedWordsReducer";

const reducers = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer
});

export default reducers;
