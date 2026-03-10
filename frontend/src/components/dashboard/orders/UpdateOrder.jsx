import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateOrder = () => {
  
  const navigate = useNavigate();

  const [status, setStatus] = useState("");

  const formhandling = (e) => {
    e.preventDefault();

    const orderData = {
      status: status,
    };

    console.log(orderData);

    // call API here
    // axios.put(`/api/orders/${orderId}`, orderData)

    alert("Order status updated successfully");
  };

  return (
    <>
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
            <label className="block mb-2 text-slate-300 font-medium">
              Order Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded w-full mb-6"
              required
            >
              <option value="">Select Status</option>
              <option value="PENDING">Pending</option>
              <option value="PROCESSING">Processing</option>
              <option value="SHIPPED">Shipped</option>
              <option value="DELIVERED">Delivered</option>
              <option value="CANCELLED">Cancelled</option>
            </select>

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
    </>
  );
};

export default UpdateOrder;
