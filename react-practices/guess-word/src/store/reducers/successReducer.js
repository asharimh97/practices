import { CORRECT_GUESS } from "../actionTypes";

const initialState = {};

const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true;
    default:
      return false;
  }
};

export default successReducer;
