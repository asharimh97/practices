import { nanoid } from "@reduxjs/toolkit";
import { ADD_LIST } from "./actionType";

export const addList = (name: string) => (dispatch: any) => {
  dispatch({
    type: ADD_LIST,
    payload: {
      id: nanoid(),
      name
    }
  });
};
