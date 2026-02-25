import React from "react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer border-l-4 border-green-500">
        <p
          onClick={() => navigate("/dashboard/addmedicine")}
          className="text-green-600 font-semibold"
        >
          ➕ Add Medicine
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer border-l-4 border-yellow-500">
        <p className="text-yellow-600 font-semibold">⚠ Low Stock</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer border-l-4 border-red-500">
        <p className="text-red-600 font-semibold">⛔ Expired</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer border-l-4 border-blue-500">
        <p className="text-blue-600 font-semibold">📊 Reports</p>
      </div>
    </div>
  );
};

export default QuickActions;
