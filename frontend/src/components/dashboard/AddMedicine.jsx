import React from "react";
import { useNavigate } from "react-router-dom";

const AddMedicine = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-white shadow px-8 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-sky-700">
          ➕ Add New Medicine
        </h2>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          ⬅ Back
        </button>
      </div>

      {/* Page Content */}
      <div className="p-8">
        <form className="bg-white rounded-lg shadow p-8 max-w-6xl mx-auto">
          {/* Section: Basic Info */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-600 mb-1">Medicine Name</label>
              <input
                type="text"
                placeholder="Enter medicine name"
                className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Company Name</label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>

          {/* Section: Pricing & Stock */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Pricing & Stock
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-gray-600 mb-1">Price (₹)</label>
              <input
                type="number"
                placeholder="Enter price"
                className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Expiry Date</label>
              <input
                type="date"
                className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>

          {/* Section: Description */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Additional Details
          </h3>

          <div className="mb-10">
            <label className="block text-gray-600 mb-1">Description</label>
            <textarea
              rows="4"
              placeholder="Optional description about medicine"
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
            >
              Save Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
