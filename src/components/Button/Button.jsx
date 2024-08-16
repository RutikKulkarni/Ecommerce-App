import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Button = ({ text, onClick, fullWidth, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;

