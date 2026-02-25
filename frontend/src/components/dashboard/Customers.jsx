import React from "react";

const Customers = () => {
  return (
    <main className="p-6 space-y-6 bg-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-100">👥 Customers</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">Total Customers</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">320</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">Active</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">295</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">Blocked</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">25</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600">
          <p className="text-slate-400 text-sm">New This Month</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">18</h3>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-800 p-4 rounded-xl shadow flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="bg-slate-900 border border-slate-700 text-slate-200
                     px-4 py-2 rounded w-72
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        />

        <select
          className="bg-slate-900 border border-slate-700 text-slate-200
                     px-4 py-2 rounded
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Blocked</option>
        </select>

        <input
          type="date"
          className="bg-slate-900 border border-slate-700 text-slate-200
                     px-4 py-2 rounded
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      {/* Customers Table */}
      <div className="bg-slate-800 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400 border-b border-slate-700">
            <tr>
              <th className="p-4 text-left">Customer ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            <tr className="hover:bg-slate-700 transition">
              <td className="p-4 text-slate-200">CUST101</td>
              <td className="p-4 text-slate-200">Rahul Patil</td>
              <td className="p-4 text-slate-400">rahul@gmail.com</td>
              <td className="p-4 text-slate-400">9876543210</td>
              <td className="p-4">
                <span
                  className="px-3 py-1 text-xs rounded-full
                                 bg-green-500/20 text-green-400"
                >
                  Active
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button
                  className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition"
                >
                  View
                </button>
                <button
                  className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-red-600 hover:text-white transition"
                >
                  Block
                </button>
              </td>
            </tr>

            <tr className="hover:bg-slate-700 transition">
              <td className="p-4 text-slate-200">CUST100</td>
              <td className="p-4 text-slate-200">Sneha More</td>
              <td className="p-4 text-slate-400">sneha@gmail.com</td>
              <td className="p-4 text-slate-400">9123456789</td>
              <td className="p-4">
                <span
                  className="px-3 py-1 text-xs rounded-full
                                 bg-green-500/20 text-green-400"
                >
                  Active
                </span>
              </td>
              <td className="p-4 text-center">
                <button
                  className="px-3 py-1 text-xs rounded
                                   bg-slate-700 text-slate-200
                                   hover:bg-slate-600 transition"
                >
                  View
                </button>
              </td>
            </tr>

            <tr className="hover:bg-slate-700 transition">
              <td className="p-4 text-slate-200">CUST099</td>
              <td className="p-4 text-slate-200">Amit Deshmukh</td>
              <td className="p-4 text-slate-400">amit@gmail.com</td>
              <td className="p-4 text-slate-400">9988776655</td>
              <td className="p-4">
                <span
                  className="px-3 py-1 text-xs rounded-full
                                 bg-red-500/20 text-red-400"
                >
                  Blocked
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button
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
                  Unblock
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Customers;
