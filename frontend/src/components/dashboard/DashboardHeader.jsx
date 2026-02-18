import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const DashboardHeader = ({
  title = "Medicine Dashboard",
  showAddBtn = true,
}) => {
  const navigate = useNavigate();

  let username = "Admin";
  const token = localStorage.getItem("authToken");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      username = decoded.sub || decoded.username || "Admin";
    } catch (e) {
      console.error("Invalid JWT");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="bg-[#1d6aff] px-6 py-4   flex justify-between items-center">
      {/* Left */}
      <h1 className="text-3xl font-semibold text-white">{title}</h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-white font-medium">👋 {username}</span>

        {showAddBtn && (
          <button
            onClick={() => navigate("/dashboard/addmedicine")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            + Add Medicine
          </button>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
