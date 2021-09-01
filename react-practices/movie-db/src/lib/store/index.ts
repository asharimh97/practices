import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, Context } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

const withDevtools = process.env.NODE_ENV === "development" ? { name: "The Movie DB" } : false;

const store = configureStore({
  reducer: rootReducer,
  devTools: withDevtools,
});

// eslint-disable-next-line no-unused-vars
const makeStore = (context: Context) => store;

// types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
