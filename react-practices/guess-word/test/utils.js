import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import { middlewares } from "../src/store/configureStore";

import reducers from "../src/store/reducers";

export const findByTestAttributes = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, incomingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    incomingProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
}

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: reducers, middlewares
 * @param {object} initialState - Initial state for the store.
 * @function storeFactory
 * @returns {Store} - Redux store.
*/
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducers, initialState)
};
