import { createSelector, nanoid } from "@reduxjs/toolkit";
import { ADD_LIST } from "stores/lists/actionType";
import { ADD_TASK } from "./actionType";
import { propType as taskPropType } from "./schema";

type stateType = {
  tasks: Record<string, Array<taskPropType>>;
};

const initialState = {
  tasks: {}
};

export const taskState = initialState;

const allTaskSelector = (state: any) => state.task.tasks;
export const taskSelector = createSelector(allTaskSelector, state => state);

const taskReducer = (
  state: stateType = initialState,
  action: Record<string, any>
) => {
  switch (action.type) {
    // LIST
    case ADD_LIST:
      return {
        tasks: {
          ...state.tasks,
          [action.payload.name]: []
        }
      };

    // TASK
    case ADD_TASK:
      return {
        tasks: {
          ...state.tasks,
          [action.payload.listName]: [
            ...state.tasks[action.payload.listName],
            {
              id: nanoid(),
              name: action.payload.name,
              dueDate: action.payload.dueDate
            }
          ]
        }
      };
    default:
      return state;
  }
};

export default taskReducer;
