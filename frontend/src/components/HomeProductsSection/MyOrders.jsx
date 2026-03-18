import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { getOrdersByUser } from "../../api/ordersApi";

const MyOrders = () => {
  

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrdersByUser(); 
        setOrders(res.data);
      } catch (err) {
        console.error("Order fetch error", err);
      }
    };

    fetchOrders();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case "DELIVERED":
        return <FaCheckCircle className="text-green-500 text-xl" />;
      case "CANCELLED":
        return <FaTimesCircle className="text-red-500 text-xl" />;
      default:
        return <MdPendingActions className="text-yellow-500 text-xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Orders</h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
          <FaBoxOpen className="text-6xl mb-4" />
          <p>No orders found</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-3 mb-3">
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    Order #{order.orderCode}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {getStatusIcon(order.status)}
                  <span className="font-medium text-gray-700">
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {order.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.medicine?.imageUrl}
                        alt={item.medicine?.name}
                        className="w-14 h-14 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.medicine?.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold text-green-600">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t">
                <p className="text-gray-600 text-sm">
                  Delivery: {order.deliveryAddress}
                </p>

                <p className="text-lg font-bold text-gray-900">
                  ₹{order.totalAmount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
