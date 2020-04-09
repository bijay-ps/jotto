import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span id="guess-instructions">Try to guess the secret word!</span>
    );
  }
  return <div id="component-guessedWords">{contents}</div>;
};

GuessedWords.prototype = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
