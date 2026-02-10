import React from "react";
import DashBoardCard from "./dashboardcards/DashBoardCard";
import QuickActions from "./dashboardcards/QuickActions";
import LowStockAlert from "./dashboardcards/LowStockAlert";
import ExpiryReminder from "./dashboardcards/ExpiryReminder";
import RecentActivity from "./dashboardcards/RecentActivity";

const DashBoardlayout = () => {
  return (
    <main className="p-6 space-y-6">
      {/* Summary Cards */}
      <DashBoardCard />

      {/* Quick Actions */}
      <QuickActions />

      {/* Alerts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <LowStockAlert />
          <ExpiryReminder />
        </div>

        {/* Right Section */}
        <div>
          <RecentActivity />
        </div>
      </div>
    </main>
  );
};

export default DashBoardlayout;
