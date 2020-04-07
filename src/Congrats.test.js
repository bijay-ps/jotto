import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats.component";
import { findById } from "./test/testUtils";

Enzyme.configure({ adapter: new Adapter() });

describe("Jotto", () => {
  const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
  };

  it("should renders without error", () => {
    const wrapper = setup();
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
});
