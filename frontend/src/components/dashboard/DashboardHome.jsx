import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="p-5">
            <DashboardHeader />
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
