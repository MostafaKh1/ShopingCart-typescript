import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="border border-b-gray-500 mb-4">
      <div className="container  relative px-4 items-center flex justify-between mx-auto py-4  ">
        <div className="flex gap-x-4">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="/store" className="text-xl">
            Store
          </Link>
          <Link to="/about" className="text-xl">
            About
          </Link>
        </div>
        <div>
          <div className=" p-4 rounded-full border border-gray-500 hover:bg-blue-500 hover:border-blue-500">
            <AiOutlineShoppingCart className="w-10 h-10 text-blue-500 hover:text-white " />
          </div>
          <span className="absolute bottom-3 right-1 px-3 py-1  bg-red-500 text-white text-xl rounded-full">
            7
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
