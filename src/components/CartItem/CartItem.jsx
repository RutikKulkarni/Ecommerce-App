import React from "react";
import { FaTrash } from "react-icons/fa";
import Button from "../Button/Button";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 mb-4 bg-white rounded-lg shadow-md border border-gray-200">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg mb-4 sm:mb-0"
      />
      <div className="flex-1 sm:ml-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
          {item.title}
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
            <div className="flex justify-center sm:justify-start items-center mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 text-lg font-bold text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
              >
                –
              </button>
              <span className="mx-4 text-md font-medium text-gray-800">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 text-lg font-bold text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-3 sm:mt-0">
            <Button
              text="Remove"
              onClick={() => removeItem(item.id)}
              icon={<FaTrash />}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
