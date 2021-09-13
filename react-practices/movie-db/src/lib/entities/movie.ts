/* eslint-disable no-param-reassign */
import {
  createSlice,
  createSelector,
  createAsyncThunk,
  ActionReducerMapBuilder,
  PayloadAction,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import movieApi from "../api/movie";

const initialState = {
  data: [],
  detail: {},
  isLoading: false,
  message: "",
  error: null,
};

type MovieState = {
  data: Array<Record<string, any>>,
  detail: Record<string, any>,
  isLoading: boolean;
  message: string;
  error: any;
};

// @ts-ignore
const movieSelector = (state) => state.movie;
export const selector = createSelector(
  movieSelector,
  (movie: MovieState) => ({
    ...movie,
  }),
);

const CONTEXT = "@feature/movie";

const actionType = {
  GET_ALL_MOVIES: `${CONTEXT}/GET_ALL_MOVIES`,
  GET_DETAIL_MOVIE: `${CONTEXT}/GET_DETAIL_MOVIE`,
};

interface DetailMoviePayload {
  error?: any;
  data?: Record<string, any>
  id?: string;
}

export const effects = {
  getAllMovies: createAsyncThunk<any, any>(
    actionType.GET_ALL_MOVIES,
    async ({ page, keyword }) => {
      console.log({ page, keyword });
    },
  ),
  getDetailMovie: createAsyncThunk<DetailMoviePayload, string>(
    actionType.GET_DETAIL_MOVIE,
    async (movieId) => {
      try {
        const response = await movieApi.getDetailMovie(movieId);

        if (!response.data) {
          throw Error("Get movie detail failed");
        }

        return {
          data: response.data,
          id: movieId,
        };
      } catch (error) {
        return { error };
      }
    },
  ),
};

const reducers = {};

const extraReducers = (builder: ActionReducerMapBuilder<MovieState>) => {
  builder
    .addCase(
      HYDRATE,
      // this `HYDRATE` combine the server side store operation and client side store
      // thus after doing SSR the store is already updated with newest data
      (state: MovieState, action: Record<string, any>) => ({ ...action.payload.movie }),
    )
    .addCase(
      effects.getAllMovies.fulfilled,
      (state: MovieState, action: PayloadAction<any>) => {
      // do something here
      },
    )
    .addCase(
      effects.getDetailMovie.fulfilled,
      (state: MovieState, action: PayloadAction<DetailMoviePayload>) => {
        const { data, id, error } = action.payload;
        if (error || !id) {
          state.error = error;
        } else {
          state.detail[id] = data;
        }
      },
    );
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers,
  extraReducers,
});

export default movieSlice;
