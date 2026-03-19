import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "../../context/OrdersContext";

const MyOrders = () => {
  const { orders = [] } = useContext(OrdersContext);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
          <p className="text-gray-500">Track all your orders</p>
        </div>

        {/* Back Button (optional) */}
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full min-w-[1100px] border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No Orders Found
                </td>
              </tr>
            ) : (
              orders.map((data) => (
                <tr
                  key={data.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">{data.orderCode}</td>

                  <td className="p-4">{data.user?.fullName}</td>

                  <td className="p-4 text-gray-500">
                    {new Date(data.orderDate).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-green-600 font-semibold">
                    ₹{data.totalAmount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          data.status === "DELIVERED"
                            ? "bg-green-100 text-green-600"
                            : data.status === "CANCELLED"
                              ? "bg-red-100 text-red-600"
                              : "bg-yellow-100 text-yellow-600"
                        }`}
                    >
                      {data.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => navigate(`${data.id}`)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        View
                      </button>

                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
