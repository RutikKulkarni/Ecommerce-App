import React from "react";

const Button = ({ text, onClick, fullWidth }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
