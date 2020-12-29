import { combineReducers } from "redux";
import filmSlice from "./films/slice";

export default combineReducers({
  films: filmSlice.reducer
});
