import { createSelector } from "@reduxjs/toolkit";
import { ADD_LIST } from "./actionType";

const initialState = {
  lists: []
};

export const listState = initialState;

const allListSelector = (state: any) => state.list.lists;
export const listSelector = createSelector(allListSelector, state => state);

const listReducer = (state = initialState, action: Record<string, any>) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            ...action.payload
          }
        ]
      };
    default:
      return state;
  }
};

export default listReducer;
