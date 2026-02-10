import React from "react";

const LowStockAlert = () => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow">
      <h3 className="text-lg font-semibold text-red-600 mb-4">
        ⚠ Low Stock Medicines
      </h3>

      <ul className="space-y-3">
        <li className="flex justify-between bg-white p-3 rounded shadow">
          <span>Paracetamol</span>
          <span className="text-red-500 font-semibold">5 left</span>
        </li>
        <li className="flex justify-between bg-white p-3 rounded shadow">
          <span>Amoxicillin</span>
          <span className="text-red-500 font-semibold">3 left</span>
        </li>
        <li className="flex justify-between bg-white p-3 rounded shadow">
          <span>Cough Syrup</span>
          <span className="text-red-500 font-semibold">2 left</span>
        </li>
      </ul>
    </div>
  );
};


export default LowStockAlert;
