import React from "react";
import { shallow } from "enzyme";

import { findByTestAttributes, checkProps } from "../../../test/utils";
import Congrats from "../Congrats";

const defaultProps = {
  success: false
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
}

test("renders without error", () => {
  const wrapper = setup();
  const componentCongrats = findByTestAttributes(wrapper, "component-congrats");

  expect(componentCongrats.length).toBe(1);
});

test("renders no text when `success` prop is `false`", () => {
  const wrapper = setup({ success: false });
  const componentCongrats = findByTestAttributes(wrapper, "component-congrats");

  expect(componentCongrats.text()).toBe('');
});

test("renders non-empty congrats message when `success` prop is `true`", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttributes(wrapper, "congrats-message");

  expect(message.text().length).not.toBe(0);
});

test("does not throw error if props is suit", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
})
