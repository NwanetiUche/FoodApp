import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("642583");
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Routes>
          <Route
            path="/"
            element={<FoodList setFoodId={setFoodId} foodData={foodData} />}
          />
          <Route
            path="/fooddetails"
            element={<FoodDetails foodId={foodId} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
