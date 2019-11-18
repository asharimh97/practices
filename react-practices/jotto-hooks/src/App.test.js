import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findComponent } from "../test/testUtils";

const setup = (props = {}) => {
  const wrapper = shallow(<App />);
  return wrapper;
};

test("renders without error", () => {
  const wrapper = setup();
  findComponent(wrapper, "component-app");
});
