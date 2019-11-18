import React from "react";
import { shallow } from "enzyme";
import Input from "../Input";
import { findComponent, checkProps } from "../../../test/testUtils";

const setup = (props = {}) => {
  return shallow(<Input {...props} />);
};

test("renders without error", () => {
  const wrapper = setup({ secretWord: "party" });
  findComponent(wrapper, "input-component");
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "golem" });
});
