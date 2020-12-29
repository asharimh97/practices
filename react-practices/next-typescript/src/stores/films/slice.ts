import {
  AnyAction,
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { ActionPayload } from "stores/types";
import actionTypes from "./actionTypes";

interface State {
  data: Record<string, any>;
  isLoading: boolean;
  error: Object;
  message: string;
}

// Initial state

const initialState: State = {
  data: {},
  isLoading: false,
  error: null,
  message: ""
};

// Selectors
const filmSelector = state => state.films;
export const selectors = createSelector(filmSelector, films => ({ ...films }));

// Side effects
export const effects = {
  getFilms: createAsyncThunk(actionTypes.GET_FILMS, async () => {
    try {
      // do async await here
      console.log("Request get films");
      const data = {
        films: [],
        page: 10
      };

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
        console.log({ state, action });
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
        console.log({ state, action });
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
