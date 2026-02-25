import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const DashboardHeader = ({ title = "Medicine Dashboard" }) => {
  const navigate = useNavigate();

  let username = "Admin";
  const token = localStorage.getItem("authToken");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      username = decoded.sub || decoded.username || "Admin";
    } catch (e) {
      console.error("Invalid JWT", e);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="bg-slate-900 px-6 py-4 flex justify-between items-center shadow">
      {/* Left */}
      <h1 className="text-2xl font-semibold text-white">{title}</h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-slate-200 font-medium">👋 {username}</span>

        <button
          onClick={handleLogout}
          className="bg-slate-700 text-slate-200 px-4 py-2 rounded-lg
             hover:bg-slate-600 hover:text-white
             focus:outline-none focus:ring-2 focus:ring-slate-500
             transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
