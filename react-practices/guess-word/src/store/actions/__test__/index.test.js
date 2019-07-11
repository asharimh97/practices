import { correctGuess } from "..";
import { CORRECT_GUESS } from "../../actionTypes";

describe("correctGuess", () => {
  test("returns an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: CORRECT_GUESS });
  });
});
