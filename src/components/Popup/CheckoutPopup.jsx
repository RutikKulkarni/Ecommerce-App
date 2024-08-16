import React, { useState } from "react";
import { toast } from "react-toastify";

const CheckoutPopup = ({ totalAmount, onClose, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    paymentMethod: "UPI",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder(formData);
    toast.success("Your order has been placed successfully.");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-3 w-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-3 w-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-3 w-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-3 w-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  checked={formData.paymentMethod === "UPI"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  UPI
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={formData.paymentMethod === "Card"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Net Banking"
                  checked={formData.paymentMethod === "Net Banking"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Net Banking
                </label>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                Total Amount:{" "}
                <span className="text-blue-600">${totalAmount}</span>
              </h3>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPopup;
