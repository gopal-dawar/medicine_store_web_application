import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrders = ({ orders }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30">
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl p-6">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400 border-b border-slate-700">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {orders.length === 0 ? (
              <tr className="text-center text-white text-2xl p-3">
                <td>Not Data Found</td>
              </tr>
            ) : (
              orders.map((data) => {
                return (
                  <tr className="hover:bg-slate-700 transition">
                    <td className="p-4 text-slate-200">{data.orderCode}</td>
                    <td className="p-4 text-slate-200">{data.user.fullName}</td>
                    <td className="p-4 text-slate-400">
                      {new Date(data.orderDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-slate-200">₹{data.totalAmount}</td>
                    <td className="p-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs
                                 bg-yellow-500/20 text-yellow-400"
                      >
                        {data.status}
                      </span>
                    </td>
                    <td className="p-4 text-center space-x-2">
                      <button
                        onClick={() => navigate(`${data.id}`)}
                        className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition"
                      >
                        View
                      </button>
                      <button
                        className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition"
                      >
                        Cancele
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
