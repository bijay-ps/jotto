import React from "react";
import { mount } from "enzyme";
import { findById } from "./test/testUtils";
import App from "./App";
import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

const setUp = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  React.useReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);

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

describe("Secret word is not null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp("party");
  });

  it("should render the App when secret word is not null", () => {
    const appComponent = findById(wrapper, "component-App");
    expect(appComponent.exists()).toBe(true);
  });

  it("should not render the spinner when secret word is not null", () => {
    const spinnerComponent = findById(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe("Secret word is null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(null);
  });

  it("should not render the App when secret word is null", () => {
    const appComponent = findById(wrapper, "component-App");
    expect(appComponent.exists()).toBe(false);
  });

  it("should render the spinner when secret word is null", () => {
    const spinnerComponent = findById(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(true);
  });
});
