import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import countReducer from "./reducer";

const storeFactory = () => {
  const reduxStore = createStore(countReducer, composeWithDevTools());
  return reduxStore;
};

export default storeFactory;
