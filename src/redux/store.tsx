import { createStore, applyMiddleware } from "redux"; //applyMiddleware // compose
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const initialStateFunc = () => {
  let parsedData;

  const data = localStorage.getItem("cart");
  parsedData = data && JSON.parse(data);

  if (parsedData) {
    return parsedData;
  }
  return { cart: [] };
  //return parsedData || { cart: [] }; (this returns the 1st truthy value)
};

const storeFactory = () => {
  const middleware = [thunk]; //if u have saga use saga here inside array

  const reduxStore = createStore(
    rootReducer,
    initialStateFunc(),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  reduxStore.subscribe(() => {
    const cart = reduxStore.getState();
    //console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  return reduxStore;
};

export default storeFactory;
