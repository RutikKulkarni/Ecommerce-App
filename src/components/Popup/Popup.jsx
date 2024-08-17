import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Button from "../Button/Button";

const Popup = ({ product, onClose, addToCart }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!product) return null;

  const filledStars = Math.floor(product.rating.rate);
  const emptyStars = 5 - filledStars;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg w-full max-w-md mx-4"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 flex items-center text-xl"
          onClick={onClose}
        >
          <IoIosClose className="mr-1 w-8 h-8" />
        </button>
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-contain mb-4"
          />
          <h5 className="text-2xl font-bold text-slate-900 mb-2">
            {product.title}
          </h5>
          <div className="flex items-center justify-between w-full mb-4">
            <p className="text-3xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900 mr-2">
                {product.rating.rate}
              </span>
              {[...Array(filledStars)].map((_, index) => (
                <FaStar key={index} className="h-4 w-4 text-yellow-300" />
              ))}
              {[...Array(emptyStars)].map((_, index) => (
                <FaStar key={index} className="h-4 w-4 text-gray-300" />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-4">{product.description}</p>
          <Button
            text="Add to Cart"
            icon={<FaCartPlus />}
            onClick={() => addToCart(product)}
            fullWidth={true}
            className="rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
