import {combineReducers} from "redux";

import successReducer from "./successReducer";
import guessedWordsReducer from "./guessedWordsReducer";
import secretWordReducer from "./secretWordReducer";

const reducers = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer
});

export default reducers;
