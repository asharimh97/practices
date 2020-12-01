import { ADD_TASK, MOVE_TASK } from "./actionType";
import { propType as taskPropType } from "./schema";

export const addTask = (listId: string, { task, dueDate }: taskPropType) => (
  dispatch: any
) => {
  dispatch({
    type: ADD_TASK,
    payload: {
      listId,
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
