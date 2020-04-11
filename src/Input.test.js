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
    it("should render component without error", () => {});

    it("should render the input box", () => {});

    it("should render the submit button", () => {});
  });

  describe("Word has been guessed", () => {
    it("should render component without error", () => {});

    it("should not render the input box", () => {});

    it("should not render the submit button", () => {});
  });
});

describe("Update State", () => {});
