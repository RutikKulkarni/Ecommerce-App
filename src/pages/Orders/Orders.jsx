import React from "react";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const orderId = query.get("orderId");

  const order = JSON.parse(localStorage.getItem(`order-${orderId}`)) || {};

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Summary</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Order Details
        </h2>
        <div className="space-y-2 mb-8">
          <p className="text-lg">
            <span className="font-medium text-gray-800">Name:</span>{" "}
            {order.name}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-800">Email:</span>{" "}
            {order.email}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-800">Mobile Number:</span>{" "}
            {order.mobile}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-800">Address:</span>{" "}
            {order.address}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-800">Total Amount:</span> $
            {order.total}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-800">Payment Method:</span>{" "}
            {order.paymentMethod}
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">
          Purchased Items
        </h2>
        <ul className="divide-y divide-gray-200">
          {order.items?.map((item) => (
            <li
              key={item.id}
              className="py-4 flex flex-col md:flex-row md:justify-between"
            >
              <div className="space-y-1">
                <p className="text-lg">
                  <span className="font-medium text-gray-800">Name:</span>{" "}
                  {item.name}
                </p>
                <p className="text-lg">
                  <span className="font-medium text-gray-800">Price:</span> $
                  {item.price}
                </p>
                <p className="text-lg">
                  <span className="font-medium text-gray-800">Quantity:</span>{" "}
                  {item.quantity}
                </p>
              </div>
              <div className="md:ml-4 flex items-center"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
