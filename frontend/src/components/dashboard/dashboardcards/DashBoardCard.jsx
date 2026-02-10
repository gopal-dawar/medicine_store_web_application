import React from "react";

const DashBoardCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
        <p className="text-sm opacity-80">Total Medicines</p>
        <h2 className="text-4xl font-bold mt-2">120</h2>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
        <p className="text-sm opacity-80">Low Stock</p>
        <h2 className="text-4xl font-bold mt-2">8</h2>
      </div>

      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
        <p className="text-sm opacity-80">Expired</p>
        <h2 className="text-4xl font-bold mt-2">3</h2>
      </div>
    </div>
  );
};

export default DashBoardCard;
