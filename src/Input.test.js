import React from "react";
import { shallow } from "enzyme";
import { findById, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setUp = initialState => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />)
    .dive()
    .dive();
};

setUp();

describe("Render", () => {
  describe("Word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setUp(initialState);
    });

    it("should render component without error", () => {
      const component = findById(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    it("should render the input box", () => {
      const inputBox = findById(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    it("should render the submit button", () => {
      const submitButton = findById(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("Word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setUp(initialState);
    });

    it("should render component without error", () => {
      const component = findById(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    it("should not render the input box", () => {
      const inputBox = findById(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    it("should not render the submit button", () => {
      const submitButton = findById(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("Update State", () => {});
