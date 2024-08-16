import React from "react";
import { Link } from "react-router-dom";
import { IoCart, IoBagCheck } from "react-icons/io5";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="container mx-auto py-3 px-6 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">
          <Link to="/" className="hover:text-blue-500 transition duration-300">
            Ecommerce
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition duration-300"
            >
              <div className="relative">
                <IoCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex justify-center items-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
