import { combineReducers } from "@reduxjs/toolkit";
import movieSlice from "lib/entities/movie";

const rootReducer = combineReducers({
  movie: movieSlice.reducer,
});

export default rootReducer;
