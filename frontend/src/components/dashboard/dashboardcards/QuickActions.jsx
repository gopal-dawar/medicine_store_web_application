import React from "react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {/* Add Medicine */}
      <div
        onClick={() => navigate("/dashboard/addmedicine")}
        className="bg-slate-800 p-5 rounded-xl shadow cursor-pointer
                   hover:bg-slate-700 transition border-l-4 border-slate-600"
      >
        <p className="text-slate-100 font-semibold">➕ Add Medicine</p>
      </div>

      {/* Low Stock */}
      <div
        onClick={() => navigate("/dashboard/lowstock")}
        className="bg-slate-800 p-5 rounded-xl shadow cursor-pointer
                   hover:bg-slate-700 transition border-l-4 border-yellow-500"
      >
        <p className="text-yellow-400 font-semibold">⚠ Low Stock</p>
      </div>

      {/* Expired */}
      <div
        onClick={() => navigate("/dashboard/expiremed")}
        className="bg-slate-800 p-5 rounded-xl shadow cursor-pointer
                   hover:bg-slate-700 transition border-l-4 border-red-500"
      >
        <p className="text-red-400 font-semibold">⛔ Expired</p>
      </div>

      {/* Reports */}
      <div
        onClick={() => navigate("/dashboard/reports")}
        className="bg-slate-800 p-5 rounded-xl shadow cursor-pointer
                   hover:bg-slate-700 transition border-l-4 border-blue-500"
      >
        <p className="text-blue-400 font-semibold">📊 Reports</p>
      </div>
    </div>
  );
};

export default QuickActions;
