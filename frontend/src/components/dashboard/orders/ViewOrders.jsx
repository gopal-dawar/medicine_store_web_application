import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../api/ordersApi";

const ViewOrders = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await getOrderById(id);
        setOrder(res.data);
      } catch (error) {
        console.error("Failed to fetch order", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) {
    return <p className="text-slate-300 p-4">Loading order details...</p>;
  }

  if (!order) {
    return <p className="text-red-400 p-4">Order not found</p>;
  }

  const statusColor =
    order.status === "DELIVERED"
      ? "bg-green-600"
      : order.status === "CANCELLED"
        ? "bg-red-600"
        : "bg-yellow-600";

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-100">
          📦 Order Details
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded"
        >
          ⬅ Back
        </button>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4">
        <p className="text-slate-300">
          <span className="font-semibold">Order Code:</span> {order.orderCode}
        </p>

        <p className="text-slate-300">
          <span className="font-semibold">Customer:</span>{" "}
          {order.user?.fullName || "N/A"}
        </p>

        <p className="text-slate-300">
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`px-3 py-1 rounded-full text-xs bg-yellow-600/20 text-yellow-400 ${statusColor}`}
          >
            {order.status}
          </span>
        </p>

        <p className="text-slate-300">
          <span className="font-semibold">Order Date:</span>{" "}
          {new Date(order.orderDate || order.createdAt).toLocaleString()}
        </p>

        <p className="text-slate-300">
          <span className="font-semibold">Total Items:</span> {order.totalItems}
        </p>

        <p className="text-slate-300">
          <span className="font-semibold">Delivery Address:</span>{" "}
          {order.deliveryAddress || "Not Provided"}
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-slate-100 mb-4">
          🧾 Ordered Items
        </h3>

        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-700 text-left">
              <th className="py-2">Medicine</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {order.items?.map((item) => (
              <tr key={item.id} className="border-b border-slate-700">
                <td className="py-2">{item.medicine?.name || "Unknown"}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td className="font-semibold">₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl shadow text-right">
        <h3 className="text-xl font-bold text-slate-100">
          Total : ₹{Number(order.totalAmount).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default ViewOrders;
