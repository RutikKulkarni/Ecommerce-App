import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg border border-gray-300"
      />
      <div className="flex-1 ml-4">
        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
        <p className="text-lg text-gray-700 mt-1">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-3">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-10 h-10 text-xl font-semibold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
          >
            –
          </button>
          <span className="mx-4 text-xl text-gray-900">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-10 h-10 text-xl font-semibold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-sm text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
