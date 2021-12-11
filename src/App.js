import "./App.css";
import { Routes, Route } from "react-router-dom";

import Country from "./components/Country";
import Countries from "./components/Countries";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route exact path=":countryName" element={<Country />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
