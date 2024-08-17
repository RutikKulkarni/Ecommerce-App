import React from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Card = ({ product, addToCart, openPopup }) => {
  const filledStars = Math.floor(product.rating.rate);
  const emptyStars = 5 - filledStars;

  const handleCardClick = (e) => {
    if (e.target.closest(".add-to-cart-button")) {
      return;
    }
    openPopup(product);
  };

  return (
    <div
      className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-contain"
        />
        <span className="absolute top-0 left-0 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          10% OFF
        </span>
        {product.discount && (
          <span className="absolute top-0 left-0 m-1 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {product.discount}% OFF
          </span>
        )}
      </a>
      <div className="flex-1 mt-4 ">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900 line-clamp-2">
            {product.title}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-slate-900 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </p>
          <div className="flex items-center">
            <span className="ml-3 bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold rounded">
              {product.rating.rate}
            </span>
          </div>
        </div>
      </div>
      <Button
        text="Add to Cart"
        icon={<FaCartPlus />}
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        fullWidth={true}
        className="add-to-cart-button flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default Card;
