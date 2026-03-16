import React from "react";
import { useNavigate } from "react-router-dom";

const OrdersList = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-800 rounded-xl shadow overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-6 bg-slate-900 text-slate-400 text-sm border-b border-slate-700">
        <div className="p-4">Order ID</div>
        <div className="p-4">Customer</div>
        <div className="p-4">Date</div>
        <div className="p-4">Amount</div>
        <div className="p-4">Status</div>
        <div className="p-4 text-center">Actions</div>
      </div>

      {/* Body */}
      {orders.length === 0 ? (
        <div className="p-6 text-center text-slate-300">No Data Found</div>
      ) : (
        orders.map((data) => (
          <div
            key={data.id}
            className="grid grid-cols-6 border-b border-slate-700 hover:bg-slate-700 transition text-sm"
          >
            <div className="p-4 text-slate-200">{data.orderCode}</div>

            <div className="p-4 text-slate-200">{data.user?.fullName}</div>

            <div className="p-4 text-slate-400">
              {new Date(data.orderDate).toLocaleDateString()}
            </div>

            <div className="p-4 text-slate-200">₹{data.totalAmount}</div>

            <div className="p-4">
              <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">
                {data.status}
              </span>
            </div>

            <div className="p-4 text-center space-x-2">
              <button
                onClick={() => navigate(`orders/vieworder/${data.id}`)}
                className="px-3 py-1 text-xs rounded bg-slate-700 text-slate-200 hover:bg-slate-600 transition"
              >
                View
              </button>

              <button
                onClick={() => navigate(`orders/updateOrder/${data.id}`)}
                className="px-3 py-1 text-xs rounded bg-slate-700 text-slate-200 hover:bg-slate-600 transition"
              >
                Update
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersList;
