import { storeFactory } from "../../../../test/utils";
import { guessWord } from "../guessedWordsActions";

describe("guessWord action dispacther", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";

  describe("no word guessed", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      };
      expect(newState).toEqual(expectedState);
    });

    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      };
      expect(newState).toEqual(expectedState);
    });

  });

  describe("some word guessed", () => {
    const guessedWords = [ { guessedWord: "agile", letterMatchCount: 1 }, { guessedWord: "lorem", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });

    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
    
  });
})
