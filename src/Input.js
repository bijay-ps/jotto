import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const submit = e => {
    e.preventDefault();
    setCurrentGuess("");
    // TODO: Update guessedWords context
    // TODO: check against secretWord and optionally update success context
  };

  return (
    <div id="component-Input">
      <form className="form-inline">
        <input
          type="text"
          className="mb-2 mx-sm-3"
          id="input-box"
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value)}
          placeholder="enter guess"
        />
        <button
          type="submit"
          id="submit-button"
          className="btn btn-primary mb-2"
          onClick={e => submit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.prototype = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
