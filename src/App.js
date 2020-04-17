import React from "react";
import "./App.css";
import hookActions from "./actions/hookActions";
import Congrats from "./Congrats.component";
import GuessedWords from "./GuessedWords.component";
import Input from "./Input";

/**
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {{secretWord: any}}
 */
function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return {
        ...state,
        secretWord: action.payload
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" id="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" id="component-App">
      <h1>Jotto</h1>
      <Input secretWord={state.secretWord} />
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
