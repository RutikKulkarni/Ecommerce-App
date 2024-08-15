import React from "react";
import { FaTrash } from "react-icons/fa";
import Button from "../Button/Button";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center p-5 mb-5 bg-white rounded-xl shadow-lg">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1 ml-6">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-3">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-10 h-10 text-xl font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            –
          </button>
          <span className="mx-5 text-lg font-medium text-gray-800">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-10 h-10 text-xl font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
      <div className="ml-6">
        <Button
          text="Remove"
          onClick={() => removeItem(item.id)}
          icon={<FaTrash />}
          className="bg-red-600 hover:bg-red-700 focus:ring-red-500"
        />
      </div>
    </div>
  );
};

export default CartItem;
