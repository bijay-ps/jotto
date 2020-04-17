import React from "react";
import "./App.css";
import Congrats from "./Congrats.component";
import GuessedWords from "./GuessedWords.component";

function reducer(state, action) {
  switch(action.type) {
    case 'setSecretWord':
      return {
        ...state,
        secretWord: action.payload
      }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(
      reducer,
      { secretWord: null }
  )

  const setSecretWord = (secretWord) => dispatch({ type: 'setSecretWord', payload: secretWord })
  return (
    <div className="container" id="component-App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
