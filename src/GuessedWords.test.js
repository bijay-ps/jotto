import React from "react";
import { shallow } from "enzyme";
import { findById, checkProps } from "./test/testUtils";
import GuessedWords from "./GuessedWords.component";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

it("should not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it("should render without error", function() {
    const component = findById(wrapper, "component-guessedWords");
    expect(component.length).toBe(1);
  });

  it("should renders instructions to guess a word", function() {
    const instructions = findById(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are words guessed", () => {
  let wrapper;

  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  it("should render without error", () => {
    const component = findById(wrapper, "component-guessedWords");
    expect(component.length).toBe(1);
  });

  it("should render 'guessed words' section", () => {
    const guessedWordsNode = findById(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  it("should render correct number of guessed words", function() {
    const guessedWordsNodes = findById(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
