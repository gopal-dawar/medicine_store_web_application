import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderById, updateorder } from "../../../api/ordersApi";

const UpdateOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orders, setOrders] = useState({
    status: "",
    user: {},
  });

  const formhandling = async (e) => {
    e.preventDefault();

    const re = await updateorder(id, orders);
    console.log(re.data);

    alert("Order status updated successfully");
    navigate(-1);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await getOrderById(id);
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching order", error);
      }
    };

    fetchdata();
  }, [id]);

  return (
    <div className="min-h-screen mt-10 bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 shadow p-6 max-w-3xl mx-auto rounded flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-100">
          Update Order Status
        </h2>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border border-slate-600 rounded text-slate-200 hover:bg-slate-700"
        >
          ⬅ Back
        </button>
      </div>

      {/* Form */}
      <div className="p-8">
        <form
          onSubmit={formhandling}
          className="bg-slate-800 rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
        >
          {/* Customer Name */}
          <div className="mb-4">
            <label className="block mb-1 text-slate-300">Customer Name</label>
            <input
              type="text"
              value={orders.user?.fullName || ""}
              readOnly
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Customer Email */}
          <div className="mb-4">
            <label className="block mb-1 text-slate-300">Customer Email</label>
            <input
              type="text"
              value={orders.user?.email || ""}
              readOnly
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Order Code */}
          <div className="mb-4">
            <label className="block mb-1 text-slate-300">Order Code</label>
            <input
              type="text"
              value={orders.orderCode || ""}
              readOnly
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Order Date */}
          <div className="mb-4">
            <label className="block mb-1 text-slate-300">Order Date</label>
            <input
              type="text"
              value={orders.orderDate || ""}
              readOnly
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Delivery Address */}
          <div className="mb-4">
            <label className="block mb-1 text-slate-300">
              Delivery Address
            </label>
            <input
              type="text"
              value={orders.deliveryAddress || ""}
              readOnly
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Total Items */}
          <div className="mb-4">
            <label className="block mb-1 text-slate-300">Total Items</label>
            <input
              type="text"
              value={orders.totalItems || ""}
              readOnly
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Total Amount */}
          <div className="mb-4">
            <label className="block mb-1 text-slate-300">Total Amount</label>
            <input
              type="text"
              value={`₹ ${orders.totalAmount || 0}`}
              readOnly
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Order Status */}
          <div className="mb-6">
            <label className="block mb-2 text-slate-300 font-medium">
              Order Status
            </label>

            <select
              value={orders.status}
              onChange={(e) => setOrders({ ...orders, status: e.target.value })}
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full"
              required
            >
              <option value="">Select Status</option>
              <option value="PENDING">Pending</option>
              <option value="PROCESSING">Processing</option>
              <option value="SHIPPED">Shipped</option>
              <option value="DELIVERED">Delivered</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-slate-600 rounded text-slate-200 hover:bg-slate-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded bg-slate-700 text-slate-100 hover:bg-slate-600"
            >
              Update Status
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateOrder;
