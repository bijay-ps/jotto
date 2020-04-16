import React from "react";
import { shallow } from "enzyme";
import { findById } from "./test/testUtils";
import App from "./App";

const setUp = () => {
  return shallow(<App />);
};

it("should render without errors", () => {
  const wrapper = setUp();
  const component = findById(wrapper, "component-App");
  expect(component.length).toBe(1);
});
