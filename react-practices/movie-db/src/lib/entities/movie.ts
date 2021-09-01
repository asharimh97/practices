import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  message: "",
  error: null,
};

export const reducers = {};

const movieSlice = createSlice({
  name: "movie",
  reducers,
  initialState,
});

export default movieSlice;
