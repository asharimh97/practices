import { SET_SECRET_WORD } from "../actionTypes"

const initialState = {};

const secretWordReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer
