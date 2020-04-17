import React from "react";
import { shallow } from "enzyme";
import { checkProps, findById } from "./test/testUtils";
import Input from "./Input";

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

describe("state controlled input field", () => {
  let mockSetCurrentGuess, wrapper;
  mockSetCurrentGuess = jest.fn();

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setUp();
  });
  it("should update the state value of input box upon change", () => {
    const inputBox = findById(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  it("should clear the input box upon submitting the form", () => {
    const submitButton = findById(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
