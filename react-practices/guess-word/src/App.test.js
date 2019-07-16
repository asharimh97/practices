import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/utils";
import App from "./App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();

  return wrapper;
};

describe("redux props", () => {
  test("has `success` state as a prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  test("has `secretWord` state as a prop", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord);
  });

  test("has `guessedWords` state as a prop", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test("`getSecretWord` action creator is a function on the props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
