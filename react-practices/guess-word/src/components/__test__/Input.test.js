import React from "react";
import { shallow } from "enzyme";

import { findByTestAttributes, storeFactory } from "../../../test/utils";

import Input, { UnconnectedInput } from "../Input";

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

describe("redux props", () => {

  test("has `success` store state as a prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("`guessWord` action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

test("`guessWord` runs on click button", () => {
  const guessWordMock = jest.fn();

  const wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);
  const submitButton = findByTestAttributes(wrapper, "submit-button");
  submitButton.simulate("click");

  const guessWordCallCount = guessWordMock.mock.calls.length;

  expect(guessWordCallCount).toBe(1);

})
