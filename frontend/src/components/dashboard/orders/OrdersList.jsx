import React from "react";
import { useNavigate } from "react-router-dom";

const OrdersList = ({
  orders,
  selectedOrders,
  setSelectedOrders,
  setSelectMode,
  selectMode,
}) => {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((o) => o.id));
    }
  };

  const gridCols = selectMode ? "grid-cols-7" : "grid-cols-6";

  return (
    <div className="bg-slate-800 rounded-xl shadow overflow-hidden">
      {/* Header */}
      <div
        className={`grid ${gridCols} bg-slate-900 text-slate-400 text-sm border-b border-slate-700`}
      >
        {selectMode && (
          <div className="p-4 flex items-center gap-2">
            All
            <input
              type="checkbox"
              checked={
                selectedOrders.length === orders.length && orders.length > 0
              }
              onChange={handleSelectAll}
            />
          </div>
        )}

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
        orders.map((data, idx) => (
          <div
            key={data.id}
            className={`grid ${gridCols} border-b border-slate-700 text-sm ${
              selectedOrders.includes(data.id)
                ? "bg-slate-700"
                : "hover:bg-slate-700"
            }`}
          >
            {selectMode && (
              <div className="p-4 flex items-center gap-2 text-white">
                <span>{idx + 1}</span>
                <input
                  type="checkbox"
                  checked={selectedOrders.includes(data.id)}
                  onChange={() => handleSelect(data.id)}
                />
              </div>
            )}

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
                onClick={() =>
                  navigate(`/dashboard/orders/orders/vieworder/${data.id}`)
                }
                className="px-3 py-1 text-xs rounded bg-slate-700 text-slate-200 hover:bg-slate-600 transition"
              >
                View
              </button>

              <button
                onClick={() =>
                  navigate(`/dashboard/orders/orders/updateOrder/${data.id}`)
                }
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
