import React from "react";
import Button from "../../components/Button/Button"; // Adjust the import path as needed

const BillingInfo = ({ cartItems, calculateTotal, onCheckout }) => {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-xl font-semibold text-gray-900">Order Summary</p>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <dl key={item.id} className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">
              {item.title}
              <span className="text-gray-500"> (x{item.quantity})</span>
            </dt>
            <dd className="text-base font-medium text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </dd>
          </dl>
        ))}

        <div className="border-t border-gray-200 pt-4">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-bold text-gray-900">Total</dt>
            <dd className="text-base font-bold text-gray-900">
              ${calculateTotal()}
            </dd>
          </dl>
        </div>
      </div>

      <Button
        onClick={onCheckout}
        text="Proceed to Checkout"
        fullWidth
        className="bg-green-600 text-white hover:bg-green-700 focus:ring-green-300"
      />
    </div>
  );
};

export default BillingInfo;
