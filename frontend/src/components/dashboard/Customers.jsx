import React from "react";

const Customers = () => {
  return (
    <main className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">👥 Customers</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Total Customers</p>
          <h3 className="text-2xl font-bold mt-2">320</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Active</p>
          <h3 className="text-2xl font-bold mt-2">295</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-red-500">
          <p className="text-gray-500 text-sm">Blocked</p>
          <h3 className="text-2xl font-bold mt-2">25</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm">New This Month</p>
          <h3 className="text-2xl font-bold mt-2">18</h3>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="border px-4 py-2 rounded w-72"
        />

        <select className="border px-4 py-2 rounded">
          <option>All Status</option>
          <option>Active</option>
          <option>Blocked</option>
        </select>

        <input type="date" className="border px-4 py-2 rounded" />
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Customer ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="p-4">CUST101</td>
              <td className="p-4">Rahul Patil</td>
              <td className="p-4">rahul@gmail.com</td>
              <td className="p-4">9876543210</td>
              <td className="p-4">
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">
                  View
                </button>
                <button className="px-3 py-1 text-xs bg-red-500 text-white rounded">
                  Block
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-4">CUST100</td>
              <td className="p-4">Sneha More</td>
              <td className="p-4">sneha@gmail.com</td>
              <td className="p-4">9123456789</td>
              <td className="p-4">
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">
                  View
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-4">CUST099</td>
              <td className="p-4">Amit Deshmukh</td>
              <td className="p-4">amit@gmail.com</td>
              <td className="p-4">9988776655</td>
              <td className="p-4">
                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                  Blocked
                </span>
              </td>
              <td className="p-4 text-center space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">
                  View
                </button>
                <button className="px-3 py-1 text-xs bg-green-500 text-white rounded">
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
