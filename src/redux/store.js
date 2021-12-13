import { createStore, applyMiddleware } from "redux"; //applyMiddleware // compose
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import countReducer from "./reducer";

const storeFactory = () => {
  const middleware = [thunk]; //if u have saga use saga here inside array
  const reduxStore = createStore(
    countReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return reduxStore;
};

export default storeFactory;
