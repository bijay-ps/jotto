import { actionTypes } from "../actions";
import successReducers from "./successReducers";

it("should return default initial state of `false` when no action is passed", () => {
  const newState = successReducers(undefined, {});
  expect(newState).toBe(false);
});

it("should return state of true upon receiving an action of type `CORRECT_GUESS`", () => {
  const newState = successReducers(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
