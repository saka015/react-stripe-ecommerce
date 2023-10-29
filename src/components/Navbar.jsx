import React from "react";

import { BiLogoReact, BiCartAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-12 p-4 shadow-md w-full">
      <div>
        <BiLogoReact className="text-blue-300 text-3xl cursor-pointer hover:scale-110" />
      </div>
      <div className="flex gap-3 font-semibold list-none">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <BiCartAlt className="text-slate-600 text-3xl cursor-pointer hover:scale-110" />

          <span className="absolute -mt-10 ml-6 text-red-600 bg-green-200 rounded-full px-1">
            5
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
