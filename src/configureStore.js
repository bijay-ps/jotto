import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlewares = [thunk];

const createStoreWithMiddleware = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default createStoreWithMiddleware;
