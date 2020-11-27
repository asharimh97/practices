const initialState = {
  list_1: [],
  list_2: [],
  list_3: []
};

export const listState = initialState;

const listReducer = (state = initialState, action: Record<string, any>) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
