import { combineReducers } from "redux";
import success from "./successReducers";
import guessedWords from "./guessedWords.reducer";
import secretWord from "./secretWord.reducer";

export default combineReducers({
  success,
  guessedWords,
  secretWord
});
