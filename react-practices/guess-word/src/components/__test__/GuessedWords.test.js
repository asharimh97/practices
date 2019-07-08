import React from "react";
import { shallow } from "enzyme";

import { findByTestAttributes, checkProps } from "../../../test/utils";

import GuessedWords from "../GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  const wrapper = shallow(<GuessedWords {...setupProps} />);

  return wrapper;
}

test("doesn't throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  });

  test("renders without error", () => {
    const component = findByTestAttributes(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const instruction = findByTestAttributes(wrapper, "component-instruction");
    expect(instruction.length).not.toBe(0);
  })
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }, // the answer is right here
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findByTestAttributes(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders 'guessed words' section", () => {
    const guessedWordsNode = findByTestAttributes(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordNode = findByTestAttributes(wrapper, "guessed-word");
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
