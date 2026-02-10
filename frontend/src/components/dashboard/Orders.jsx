import React from "react";

const Orders = () => {
  return (
    <main className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">📦 Orders</h2>
      </div>

      {/* Order Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h3 className="text-2xl font-bold mt-2">245</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm">Pending</p>
          <h3 className="text-2xl font-bold mt-2">18</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Delivered</p>
          <h3 className="text-2xl font-bold mt-2">210</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-red-500">
          <p className="text-gray-500 text-sm">Cancelled</p>
          <h3 className="text-2xl font-bold mt-2">17</h3>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by Order ID"
          className="border px-4 py-2 rounded w-60"
        />

        <select className="border px-4 py-2 rounded">
          <option>All Status</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <input type="date" className="border px-4 py-2 rounded" />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="p-4">#ORD1021</td>
              <td className="p-4">Rahul Patil</td>
              <td className="p-4">2026-02-08</td>
              <td className="p-4">₹850</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">
                  View
                </button>
                <button className="px-3 py-1 text-xs bg-green-500 text-white rounded">
                  Update
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-4">#ORD1020</td>
              <td className="p-4">Sneha More</td>
              <td className="p-4">2026-02-07</td>
              <td className="p-4">₹1,200</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Delivered
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">
                  View
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-4">#ORD1019</td>
              <td className="p-4">Amit Deshmukh</td>
              <td className="p-4">2026-02-06</td>
              <td className="p-4">₹640</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-700">
                  Cancelled
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">
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
