import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import CheckoutPopup from "../../components/Popup/CheckoutPopup";
import { v4 as uuidv4 } from "uuid";

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePlaceOrder = (formData) => {
    const orderItems = cartItems.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    window.location.href = `/orders?name=${formData.name}&email=${
      formData.email
    }&mobile=${formData.mobile}&address=${
      formData.address
    }&total=${calculateTotal()}&items=${encodeURIComponent(
      JSON.stringify(orderItems)
    )}`;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700">
              Total: <span className="text-blue-600">${calculateTotal()}</span>
            </h2>
            <button
              onClick={() => setShowCheckout(true)}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              Checkout
            </button>
          </div>
          {showCheckout && (
            <CheckoutPopup
              totalAmount={calculateTotal()}
              onClose={() => setShowCheckout(false)}
              onPlaceOrder={handlePlaceOrder}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
