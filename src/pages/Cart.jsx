// Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
