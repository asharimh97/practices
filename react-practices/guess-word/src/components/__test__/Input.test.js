import React from "react";
import { shallow } from "enzyme";

import { findByTestAttributes, storeFactory } from "../../../test/utils";

import Input from "../Input";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Input store={store} />).dive().dive();
}

setup();

describe("test render", () => {
  describe("word has not been guessed", () => {
    test("renders without error", () => {

    });

    test("renders input box", () => {

    });

    test("renders submit button", () => {

    });
  });

  describe("word has been guessed", () => {
    test("renders without error", () => {

    });

    test("doesn't renders input box", () => {

    });

    test("doesn't renders submit button", () => {

    });
  });
});

describe("updating state", () => {

});
