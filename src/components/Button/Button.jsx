import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Button = ({ text, onClick, fullWidth, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
