import { createStore } from "redux"; //applyMiddleware
import { composeWithDevTools } from "redux-devtools-extension";

import countReducer from "./reducer";

const storeFactory = () => {
  const reduxStore = createStore(countReducer, composeWithDevTools());
  return reduxStore;
};

export default storeFactory;
