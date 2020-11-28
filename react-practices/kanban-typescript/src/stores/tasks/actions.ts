import { ADD_TASK } from "./actionType";
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
