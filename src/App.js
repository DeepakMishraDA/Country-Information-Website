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
  return (
    <div className="App">
      <h1>Count:{selector}</h1>

      <Routes>
        <Route path="/" element={<Countries />} />
        <Route exact path=":countryName" element={<Country />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
