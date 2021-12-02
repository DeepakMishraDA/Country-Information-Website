import "./App.css";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Countries from "./components/Countries";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="about/" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
