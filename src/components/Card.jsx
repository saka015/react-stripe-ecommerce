// Card.jsx
import React from "react";
import shirt from "../assets/shirt.jpg";
import { useCart } from "../context/CartContext";

const Card = (props) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id: props.id, name: props.name, price: props.price },
    });
  };

  return (
    <div className="border border-1 w-[250px]  bg-white">
      <img className="px-auto mx-auto" src={shirt} width="200px" alt="" />
      <h1 className="text-xl font-semibold text-left ml-6">{props.name}</h1>
      <h1 className="text-md font-normal text-left ml-6">Rs.{props.price}</h1>
      <button
        className="text-center px-auto w-full p-2 bg-green-100 hover:bg-green-200"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
