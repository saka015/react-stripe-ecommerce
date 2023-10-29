// Products.js
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import data from "../assets/data.json";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { dispatch } = useCart(); // Get the dispatch function from CartContext

  const [servicesData, setServicesData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Set the services data from the imported JSON
    setServicesData(data);
    setFilteredData(data); // Initialize filtered data with all data
  }, []);

  const handleSearch = (searchText) => {
    const filtered = servicesData.filter((product) => {
      const name = product.name.toLowerCase();
      return name.includes(searchText.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchInput(text);
    handleSearch(text);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="bg-gray-100 pt-2">
      <div className="search">
        <input
          className="w-2/3 mx-auto flex mt-4 p-3 focus:outline-none shadow-md rounded-3xl"
          type="text"
          onChange={handleInputChange}
          value={searchInput}
          placeholder="Search for Products, T Shirts, Kurtas, Jeans..."
        />
      </div>
      <div className="grid grid-cols-4 p-4 gap-y-4">
        {filteredData.map((product, index) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onAddToCart={() => addToCart(product)} // Pass addToCart function
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
