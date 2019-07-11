import { CORRECT_GUESS } from "../../actionTypes";
import successReducer from "../successReducer";

test("return default initial state when no action", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("return state true upon receiving an action of type `CORRECT_GUESS`", () => {
  const newState = successReducer(undefined, { type: CORRECT_GUESS });
  expect(newState).toBe(true);
});
