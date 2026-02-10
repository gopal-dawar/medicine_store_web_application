import React from "react";

const ExpiryReminder = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-yellow-600 mb-4">
        ⏳ Expiring Soon
      </h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500">
          <tr>
            <th className="text-left">Medicine</th>
            <th className="text-left">Expiry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          <tr>
            <td>Vitamin C</td>
            <td>2026-03-10</td>
            <td>
              <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                Soon
              </span>
            </td>
          </tr>
          <tr>
            <td>Insulin</td>
            <td>2026-02-25</td>
            <td>
              <span className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                Critical
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default ExpiryReminder;
