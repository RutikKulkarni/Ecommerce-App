import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import CheckoutPopup from "../../components/Popup/CheckoutPopup";
import BillingInfo from "../../components/BillingInfo/BillingInfo";
import { v4 as uuidv4 } from "uuid";
import NotificationUtils from "../../utils/notifications";

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { showError } = NotificationUtils();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const discountedTotal = () => {
    const total = calculateTotal();
    const discount = total * 0.1;
    return (total - discount).toFixed(2);
  };

  const handlePlaceOrder = (formData) => {
    const orderItems = cartItems.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    const orderId = uuidv4();

    const orderDetails = {
      id: orderId,
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      total: discountedTotal(),
      items: orderItems,
    };

    localStorage.setItem(`order-${orderId}`, JSON.stringify(orderDetails));
    window.location.href = `/orders?orderId=${orderId}`;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showError("Your cart is empty. Please add items to proceed to checkout.");
    } else {
      setShowCheckout(true);
    }
  };

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
              ) : (
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
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <BillingInfo
              cartItems={cartItems}
              calculateTotal={calculateTotal}
              discountedTotal={discountedTotal}
              onCheckout={handleCheckout}
            />
            {showCheckout && (
              <CheckoutPopup
                totalAmount={discountedTotal()}
                onClose={() => setShowCheckout(false)}
                onPlaceOrder={handlePlaceOrder}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
