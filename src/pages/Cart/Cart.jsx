import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";

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
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              Total: <span className="text-blue-600">${calculateTotal()}</span>
            </h2>
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
