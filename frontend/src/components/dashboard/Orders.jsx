import React from "react";

const Orders = () => {
  return (
    <main className="p-6 space-y-6 bg-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-100">
          📦 Orders
        </h2>
      </div>

      {/* Order Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">Total Orders</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">245</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">Pending</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">18</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">Delivered</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">210</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">Cancelled</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">17</h3>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-800 p-4 rounded-xl shadow flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by Order ID"
          className="bg-slate-900 border border-slate-700 text-slate-200
                     placeholder:text-slate-500
                     px-4 py-2 rounded w-60
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        />

        <select
          className="bg-slate-900 border border-slate-700 text-slate-200
                     px-4 py-2 rounded
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          <option>All Status</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <input
          type="date"
          className="bg-slate-900 border border-slate-700 text-slate-200
                     px-4 py-2 rounded
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-slate-800 rounded-xl shadow overflow-x-auto">
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
            <tr className="hover:bg-slate-700 transition">
              <td className="p-4 text-slate-200">#ORD1021</td>
              <td className="p-4 text-slate-200">Rahul Patil</td>
              <td className="p-4 text-slate-400">2026-02-08</td>
              <td className="p-4 text-slate-200">₹850</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs
                                 bg-yellow-500/20 text-yellow-400">
                  Pending
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition">
                  View
                </button>
                <button className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition">
                  Update
                </button>
              </td>
            </tr>

            <tr className="hover:bg-slate-700 transition">
              <td className="p-4 text-slate-200">#ORD1020</td>
              <td className="p-4 text-slate-200">Sneha More</td>
              <td className="p-4 text-slate-400">2026-02-07</td>
              <td className="p-4 text-slate-200">₹1,200</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs
                                 bg-green-500/20 text-green-400">
                  Delivered
                </span>
              </td>
              <td className="p-4 text-center">
                <button className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition">
                  View
                </button>
              </td>
            </tr>

            <tr className="hover:bg-slate-700 transition">
              <td className="p-4 text-slate-200">#ORD1019</td>
              <td className="p-4 text-slate-200">Amit Deshmukh</td>
              <td className="p-4 text-slate-400">2026-02-06</td>
              <td className="p-4 text-slate-200">₹640</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs
                                 bg-red-500/20 text-red-400">
                  Cancelled
                </span>
              </td>
              <td className="p-4 text-center">
                <button className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Orders;