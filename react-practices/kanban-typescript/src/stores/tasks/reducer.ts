import { createSelector, nanoid } from "@reduxjs/toolkit";
import { ADD_LIST } from "stores/lists/actionType";
import { ADD_TASK, MOVE_TASK } from "./actionType";
import { propType as taskPropType } from "./schema";
import { moveTaskList, reorderList } from "./utils";

type stateType = {
  tasks: Record<string, Array<taskPropType>>;
};

const initialState = {
  tasks: {}
};

export const taskState = initialState;

const allTaskSelector = (state: any, props: any) => state.task.tasks[props.id];
export const taskSelector = createSelector(allTaskSelector, tasks => tasks);

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
          [action.payload.id]: []
        }
      };

    // TASK
    case ADD_TASK:
      return {
        tasks: {
          ...state.tasks,
          [action.payload.listId]: [
            ...state.tasks[action.payload.listId],
            {
              id: nanoid(),
              task: action.payload.task,
              dueDate: action.payload.dueDate
            }
          ]
        }
      };

    case MOVE_TASK:
      const { sourceList, destList, sourceIndex, destIndex } = action.payload;
      const source = state.tasks[sourceList];
      const dest = state.tasks[destList];
      if (sourceList === destList) {
        const newTasks = reorderList(source, sourceIndex, destIndex);

        return {
          tasks: {
            ...state.tasks,
            [sourceList]: newTasks
          }
        };
      } else {
        const newTasks = moveTaskList(source, dest, sourceIndex, destIndex);

        return {
          tasks: {
            ...state.tasks,
            [sourceList]: newTasks.source,
            [destList]: newTasks.destination
          }
        };
      }
    default:
      return state;
  }
};

export default taskReducer;
