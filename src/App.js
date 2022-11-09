import { Routes, Route } from "react-router-dom";


import {Header} from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Seafood from "./components/dropdown_menu/Seafood";
import Maindish from "./components/dropdown_menu/Main_dish";
import Vegetarian from "./components/dropdown_menu/Vegetarian";
import Dessert from "./components/dropdown_menu/Dessert";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="catogories/seafood" element={<Seafood />} />
          <Route path="catogories/maindish" element={<Maindish />} />
          <Route path="catogories/vegetarian" element={<Vegetarian />} />
          <Route path="catogories/dessert" element={<Dessert />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
