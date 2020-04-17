import React from "react";
import { mount } from "enzyme";
import { findById } from "./test/testUtils";
import App from "./App";
import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

const setUp = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  // use mount, because useEffect not called on 'shallow'
  // https://github.com/airbnb/enzyme/issue/2806
  return mount(<App />);
};

it("should render without errors", () => {
  const wrapper = setUp();
  const component = findById(wrapper, "component-App");
  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  it("should get called on App mount", () => {
    setUp();
    // check to see it secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  it("should not update the secret word on App update", () => {
    const wrapper = setUp();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
