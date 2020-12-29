import { configureStore } from "@reduxjs/toolkit";
import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";

type RootReducerType = ReturnType<typeof reducers>;

const makeStore: MakeStore<RootReducerType> = (context: Context) =>
  configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production"
  });

export const wrapper = createWrapper<RootReducerType>(makeStore, {
  debug: true
});
