import {
  createAsyncThunk,
  createSelector,
  createSlice
} from "@reduxjs/toolkit";

import { getAllFilms } from "services/api/film";
import { ActionPayload } from "stores/types";
import actionTypes from "./actionTypes";

// Initial state

const initialState = {
  data: {},
  isLoading: false,
  error: null,
  message: ""
};

type State = typeof initialState;

// Selectors
const filmSelector = state => state.films;
export const selectors = createSelector(filmSelector, films => ({ ...films }));

// Side effects
export const effects = {
  getFilms: createAsyncThunk(actionTypes.GET_FILMS, async params => {
    try {
      // do async await here
      const response = await getAllFilms(params);
      if (response.status !== 200) {
        throw new Error("Attempt get film failed");
      }

      const { data } = response;

      return { data };
    } catch (error) {
      return { error };
    }
  })
};

// Reducers
const reducers = {};

const extraReducers = builder => {
  builder
    .addCase(
      effects.getFilms.pending,
      (state: State, action: ActionPayload) => {
        state.isLoading = true;
        state.error = null;
      }
    )
    .addCase(
      effects.getFilms.fulfilled,
      (state: State, action: ActionPayload) => {
        const { error, data, message } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.data = data;
        }

        state.message = message;
        state.isLoading = false;
      }
    )
    .addCase(
      effects.getFilms.rejected,
      (state: State, action: ActionPayload) => {
        state.error = action.payload.error;
        state.isLoading = false;
      }
    );
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers,
  extraReducers
});

export default filmSlice;
