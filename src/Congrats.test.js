import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats.component";
import { findById, checkProps } from "../test/testUtils";

describe("Jotto", () => {
  const defaultProps = { success: false };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
  };

  it("should renders without error", () => {
    const wrapper = setup({ success: false });
    const component = findById(wrapper, "component-congrats");
    expect(component.length).toBe(1);
  });

  it("should renders no text when `success` prop is false ", () => {
    const wrapper = setup({ success: false });
    const component = findById(wrapper, "component-congrats");
    expect(component.text()).toBe("");
  });

  it("should renders non-empty congrats message when `success` prop is true ", () => {
    const wrapper = setup({ success: true });
    const message = findById(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
  });

  it("should not throw warning with expected prop type", () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
});
