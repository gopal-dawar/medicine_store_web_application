import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <div>
            <DashboardHeader />
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
