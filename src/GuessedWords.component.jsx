import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span id="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRow = guessedWords.map((word, index) => (
      <tr id="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div id="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRow}</tbody>
        </table>
      </div>
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
