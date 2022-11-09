import { Routes, Route } from "react-router-dom";


import {Header} from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
