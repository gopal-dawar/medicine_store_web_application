import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardHome;