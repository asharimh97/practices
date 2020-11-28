import { CombinedState } from "redux";
import listReducer from "./lists/reducer";
import taskReducer from "./tasks/reducer";

const reducers = {
  list: listReducer,
  task: taskReducer
} as CombinedState<any>;

export default reducers;
