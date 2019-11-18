import React from "react";
import { shallow } from "enzyme";
import Input from "../Input";
import { findComponent } from "../../../test/testUtils";

const setup = (props = {}) => {
  return shallow(<Input />);
};

test("renders without error", () => {
  const wrapper = setup();
  findComponent(wrapper, "input-component");
});
