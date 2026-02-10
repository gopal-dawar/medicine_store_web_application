import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Medicine Dashboard</h1>
        <button
          onClick={() => navigate("/dashboard/addmedicine")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Medicine
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
