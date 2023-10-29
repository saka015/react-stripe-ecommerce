// CartContext.js
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [], // The array to store cart items
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Add the item to the cart
      return { items: [...state.items, action.payload] };
    case "REMOVE_FROM_CART":
      // Remove the item from the cart
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
