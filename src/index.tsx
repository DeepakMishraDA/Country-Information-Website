import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import storeFactory from "./redux/store";

const reduxstore = storeFactory();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={reduxstore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
