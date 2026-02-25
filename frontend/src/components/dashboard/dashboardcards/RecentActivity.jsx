import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-slate-800 rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4 text-slate-100">
        🕒 Recent Activity
      </h3>

      <ul className="space-y-4 text-sm text-slate-300">
        <li className="border-l-4 border-green-500 pl-3">
          Added new medicine <b className="text-slate-100">Paracetamol</b>
        </li>

        <li className="border-l-4 border-yellow-500 pl-3">
          Stock low for <b className="text-slate-100">Amoxicillin</b>
        </li>

        <li className="border-l-4 border-red-500 pl-3">
          Removed expired <b className="text-slate-100">Vitamin B12</b>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;