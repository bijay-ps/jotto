import React from "react";
import { shallow } from "enzyme";
import { findById } from "./test/testUtils";
import Input from "./Input.component";

describe("Input component", () => {
  const setUp = () => {
    return shallow(<Input />);
  };

  it("should render without any error", () => {
    const wrapper = setUp();
    const component = findById(wrapper, "component-Input");
    expect(component.length).toBe(1);
  });
});
