import React from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Card = ({ product, addToCart }) => {
  const filledStars = Math.floor(product.rating.rate);
  const emptyStars = 5 - filledStars;

  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between h-full">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4 rounded-lg"
        />
        <h2 className="font-semibold text-xl text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h2>
        <div className="flex mb-3">
          {[...Array(filledStars)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <FaStar key={index} className="text-gray-300" />
          ))}
        </div>
        <p className="font-semibold text-lg text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <Button
        text="Add to Cart"
        icon={<FaCartPlus />}
        onClick={() => addToCart(product)}
        fullWidth={true}
        className="bg-blue-600 hover:bg-blue-700 text-white mt-4 py-2 px-4 rounded-lg w-full transition-colors duration-300 ease-in-out"
      />
    </div>
  );
};

export default Card;
