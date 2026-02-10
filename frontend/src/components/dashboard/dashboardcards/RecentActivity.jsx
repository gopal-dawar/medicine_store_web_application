import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">🕒 Recent Activity</h3>

      <ul className="space-y-4 text-sm">
        <li className="border-l-4 border-green-500 pl-3">
          Added new medicine <b>Paracetamol</b>
        </li>
        <li className="border-l-4 border-yellow-500 pl-3">
          Stock low for <b>Amoxicillin</b>
        </li>
        <li className="border-l-4 border-red-500 pl-3">
          Removed expired <b>Vitamin B12</b>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;
