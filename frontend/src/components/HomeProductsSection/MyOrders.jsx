import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "../../context/OrdersContext";
import { IoClose } from "react-icons/io5";
const MyOrders = () => {
  const { orders = [], updateOrder } = useContext(OrdersContext);
  const [filterOrders, setFilterOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const navigate = useNavigate();
  console.log(orders);

  useEffect(() => {
    setFilterOrders(orders.filter((order) => order.status !== "CANCELLED"));
  }, [orders]);

  const updateOrders = async (id, status) => {
    try {
      if (status === "SHIPPED" || status === "DELIVERED") {
        alert("You cannot cancel this order");
        return;
      }

      await updateOrder(id, { status: "CANCELLED" });

      setFilterOrders((prev) => prev.filter((order) => order.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="w-[90%] min-h-screen mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
              <p className="text-gray-500">Track all your orders</p>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Back
            </button>
          </div>
          {!selectedOrder ? (
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
                  {filterOrders.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center p-6 text-gray-500">
                        No Orders Found
                      </td>
                    </tr>
                  ) : (
                    filterOrders.map((data) => {
                      const canCancel =
                        data.status === "PENDING" ||
                        data.status === "PROCESSING";

                      return (
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
                                onClick={() => setSelectedOrder(data)}
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                              >
                                View
                              </button>

                              <button
                                disabled={!canCancel}
                                onClick={() =>
                                  updateOrders(data.id, data.status)
                                }
                                className={`px-3 py-1 rounded text-white
                            ${
                              canCancel
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                              >
                                Cancel
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="font-semibold text-2xl">
                    {selectedOrder.user?.fullName}
                  </h1>
                </div>

                <button
                  onClick={() => setSelectedOrder(null)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <IoClose size={20} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-xl shadow">
                  <p className="text-gray-500 text-sm">Order Code</p>
                  <p className="font-semibold text-lg">
                    {selectedOrder.orderCode}
                  </p>

                  <p className="text-gray-500 text-sm mt-3">Order Date</p>
                  <p className="font-semibold">
                    {new Date(selectedOrder.orderDate).toLocaleString()}
                  </p>

                  <p className="text-gray-500 text-sm mt-3">Status</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold
          ${
            selectedOrder.status === "DELIVERED"
              ? "bg-green-100 text-green-600"
              : selectedOrder.status === "CANCELLED"
                ? "bg-red-100 text-red-600"
                : selectedOrder.status === "SHIPPED"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-yellow-100 text-yellow-600"
          }`}
                  >
                    {selectedOrder.status}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  <p className="text-gray-500 text-sm">Total Amount</p>
                  <p className="font-bold text-green-600 text-lg">
                    ₹{selectedOrder.totalAmount}
                  </p>

                  <p className="text-gray-500 text-sm mt-3">Total Items</p>
                  <p className="font-semibold">{selectedOrder.totalItems}</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow mb-6">
                <p className="text-gray-500 text-sm">Delivery Address</p>
                <p className="font-semibold">{selectedOrder.deliveryAddress}</p>
              </div>

              <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="px-4 py-3 border-b font-semibold text-gray-700">
                  🛒 Items
                </div>

                {selectedOrder.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">{item.medicine?.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-600">₹{item.price}</p>
                      <p className="font-semibold text-green-600">
                        ₹{item.totalPrice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
