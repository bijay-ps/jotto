import React from "react";
import { shallow } from "enzyme";
import { checkProps, findById } from "./test/testUtils";
import Input from "./Input.component";

describe("Input component", () => {
  const setUp = (secretWord = "party") => {
    return shallow(<Input secretWord={secretWord} />);
  };

  it("should render without any error", () => {
    const wrapper = setUp();
    const component = findById(wrapper, "component-Input");
    expect(component.length).toBe(1);
  });

  it("should not throw warning for expected prop types", () => {
    checkProps(Input, { secretWord: "party" });
  });
});
