import React from "react";
import "./App.css";
import Congrats from "./Congrats.component";
import GuessedWords from "./GuessedWords.component";

const App = () => {
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
