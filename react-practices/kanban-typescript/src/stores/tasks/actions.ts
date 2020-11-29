import { ADD_TASK, MOVE_TASK } from "./actionType";
import { propType as taskPropType } from "./schema";

export const addTask = (listName: string, { task, dueDate }: taskPropType) => (
  dispatch: any
) => {
  dispatch({
    type: ADD_TASK,
    payload: {
      listName,
      task,
      dueDate
    }
  });
};

type moveTaskData = {
  sourceList: string;
  destList: string;
  sourceIndex: number;
  destIndex: number;
};

export const moveTask = (data: moveTaskData) => (dispatch: any) => {
  dispatch({
    type: MOVE_TASK,
    payload: {
      ...data
    }
  });
};
