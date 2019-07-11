import React from "react";
import { shallow } from "enzyme";

import { findByTestAttributes, storeFactory } from "../../../test/utils";

import Input from "../Input";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Input store={store} />).dive().dive();

  return wrapper;
}

describe("test render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      const component = findByTestAttributes(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders input box", () => {
      const input = findByTestAttributes(wrapper, "input-box");
      expect(input.length).toBe(1);
    });

    test("renders submit button", () => {
      const submitButton = findByTestAttributes(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      const component = findByTestAttributes(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("doesn't renders input box", () => {
      const input = findByTestAttributes(wrapper, "input-box");
      expect(input.length).toBe(0);
    });

    test("doesn't renders submit button", () => {
      const submitButton = findByTestAttributes(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("updating state", () => {

});
