import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api/userApi";
import { logoutUser } from "../../service/authService";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchuser = async () => {
      const re = await getCurrentUser();
      setUser(re.data);
    };
    fetchuser();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      sessionStorage.clear();
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };
  return (
    <div className="bg-slate-900 px-6 py-4 flex justify-between items-center shadow">
      {/* Left */}
      <h1 className="text-2xl font-semibold text-white">{user.role}</h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-slate-200 font-medium">👋 {user.name}</span>

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
