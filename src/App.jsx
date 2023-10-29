import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <CartProvider>
      {" "}
      {/* Wrap your app with CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
