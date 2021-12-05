import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Countries from "./components/Countries";
import Cart from "./components/Cart";

import { increase, decrease } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.count;
  });
  console.log(selector);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route exact path=":countryName" element={<Country />} />
        <Route
          path="cart"
          element={<Cart selector={selector} dispatch={dispatch} />}
        />
      </Routes>
    </div>
  );
}

export default App;
