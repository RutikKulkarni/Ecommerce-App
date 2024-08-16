import React from "react";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const orderId = query.get("orderId");

  const order = JSON.parse(localStorage.getItem(`order-${orderId}`)) || {};

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Order Details
      </h1>
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center mb-6"
        role="alert"
      >
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline">
          {" "}
          Your order has been successfully placed.
        </span>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 md:p-12 border border-gray-300">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6 border-b pb-4">
          User Account Information
        </h2>
        <div className="space-y-2 mb-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          {/* <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"> */}
          <p className="text-lg mb-0">
            <span className="font-medium text-gray-900">Name:</span>{" "}
            {order.name}
          </p>
          <p className="text-lg mb-0">
            <span className="font-medium text-gray-900">Email:</span>{" "}
            {order.email}
          </p>
          <p className="text-lg mb-0">
            <span className="font-medium text-gray-900">Mobile Number:</span>{" "}
            {order.mobile}
          </p>
          <p className="text-lg mb-0">
            <span className="font-medium text-gray-900">Address:</span>{" "}
            {order.address}
          </p>
          <p className="text-lg mb-0">
            <span className="font-medium text-gray-900">Total Amount:</span> $
            {order.total}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-900">Payment Method:</span>{" "}
            {order.paymentMethod}
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 border-b pb-4">
          Purchased Items
        </h2>
        <div className="overflow-x-auto">
          <ul className="divide-y divide-gray-200">
            {order.items?.map((item) => (
              <li
                key={item.id}
                className="py-4 flex flex-col sm:flex-row justify-between sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 bg-white shadow-md rounded-lg p-4"
              >
                {/* Name Section */}
                <div className="flex flex-col text-left sm:text-left">
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </p>
                </div>

                {/* Price and Quantity Section */}
                <div className="flex flex-col text-left sm:text-left">
                  <p className="text-lg text-gray-600">
                    Price: <span className="font-medium">${item.price}</span>
                  </p>
                  <p className="text-lg text-gray-600">
                    Quantity:{" "}
                    <span className="font-medium">{item.quantity}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
