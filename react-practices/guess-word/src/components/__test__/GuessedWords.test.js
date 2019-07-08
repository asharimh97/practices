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

test("renders without error", () => {

});

test("doesn't throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});
