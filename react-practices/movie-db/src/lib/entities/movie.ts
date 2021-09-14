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
  totalData: 0,
  detail: {},
  isLoading: false,
  message: "",
  error: null,
};

type MovieState = typeof initialState & {
  data: Array<Record<string, any>>,
  detail: Record<string, any>,
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

interface AllMoviesPayload {
  data?: Array<Record<string, any>>;
  total?: number;
  error?: any;
}

interface AllMoviesParams {
  page: number;
  keyword: string;
}

interface DetailMoviePayload {
  error?: any;
  data?: Record<string, any>
  id?: string;
}

export const effects = {
  getAllMovies: createAsyncThunk<AllMoviesPayload, AllMoviesParams>(
    actionType.GET_ALL_MOVIES,
    async ({ page, keyword }) => {
      try {
        const response = await movieApi.getAllMovies({ page, keyword });

        if (!response.data) {
          throw new Error("Get all movies failed");
        }

        const {
          Error: error, Response: res, Search, totalResults,
        } = response.data;

        if (res === "False" || error) {
          return { error };
        }

        return { data: Search, total: Number(totalResults) };
      } catch (error) {
        return { error };
      }
    },
  ),
  getDetailMovie: createAsyncThunk<DetailMoviePayload, string>(
    actionType.GET_DETAIL_MOVIE,
    async (movieId) => {
      try {
        const response = await movieApi.getDetailMovie(movieId);

        if (!response.data) {
          throw new Error("Get movie detail failed");
        }

        const { Error: error, Response: res } = response.data;

        if (res === "False" || error) {
          return { error };
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
      effects.getAllMovies.pending,
      (state: MovieState, action: PayloadAction<any, any, any>) => {
        const { page } = action.meta.arg;
        if (page === 1) {
          state.data = [];
        }
      },
    )
    .addCase(
      effects.getAllMovies.fulfilled,
      (state: MovieState, action: PayloadAction<AllMoviesPayload>) => {
        const { error, data, total } = action.payload;
        if (error) {
          state.error = error;
        } else {
          // @ts-ignore
          state.data.push(...data);
          // @ts-ignore
          state.totalData = total;
        }
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
