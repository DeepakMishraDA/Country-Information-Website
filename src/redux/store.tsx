import { createStore, applyMiddleware, compose } from "redux"; //applyMiddleware // compose
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const storeFactory = () => {
  const middleware = [thunk]; //if u have saga use saga here inside array
  const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return reduxStore;
};

export default storeFactory;
