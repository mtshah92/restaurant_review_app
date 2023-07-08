import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home/home";
import { Restaurant } from "./pages/restaurant/restaurant";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resturant/:restid" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
