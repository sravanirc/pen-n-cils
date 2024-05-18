//This is a simple online store app with 3 pages, Home, Products and About
// The page navigation is achieved using React-Router
//Page is styled with react- bootstrap and custom styling from "myStyle.css"

import "./App.css";
import "./myStyle.css";
import Home from "./components/Home";
import Products from "./components/Products";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
// import Cart from "./components/Cart.js";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [h2Visibility, setH2Visibility] = useState("hidden");
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route
          path="/products"
          element={
            <Products
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              h2Visibility={h2Visibility}
              setH2Visibility={setH2Visibility}></Products>
          }></Route>
        <Route
          path="/about"
          element={
            <About
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              h2Visibility={h2Visibility}
              setH2Visibility={setH2Visibility}></About>
          }></Route>
        {/* <Route path="/cart" element={<Cart></Cart>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
