import React, { useEffect, useState } from "react";
import { countExpireMedicine } from "../../../api/medicineApi";
import { useNavigate } from "react-router-dom";

const ExpiryReminder = ({ limit, place = false }) => {
  const [expiringSoon, setExpiringSoon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const re = await countExpireMedicine();
      if (limit) {
        setExpiringSoon(re.data.data.slice(0, limit));
      } else {
        setExpiringSoon(re.data.data);
      }
    };
    fetchdata();
  }, [limit]);

  const CRITICAL_DAYS = 10;
  const criticalDate = new Date();
  criticalDate.setDate(criticalDate.getDate() + CRITICAL_DAYS);

  return (
    <div className="bg-white overflow-x-auto rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-yellow-600">
          ⏳ Expiring Soon
        </h3>

        <div className="flex items-center gap-3">
          {place && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2
                   px-4 py-2
                   border border-gray-300 rounded-md
                   bg-white
                   text-gray-800 text-sm font-medium
                   hover:bg-gray-100
                   transition"
            >
              <span className="text-blue-600">⬅</span>
              Back
            </button>
          )}

          <span className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
            Next 10 Days
          </span>
        </div>
      </div>

      {expiringSoon.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          🎉 No medicines expiring soon
        </p>
      ) : (
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-2">Medicine</th>
              <th className="text-left py-2">Expiry</th>
              <th className="text-center py-2">Status</th>
              <th className="text-center py-2">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {expiringSoon.map((med) => {
              const isCritical = new Date(med.expiryDate) <= criticalDate;

              return (
                <tr key={med.id} className="hover:bg-gray-50 transition">
                  <td className="py-3 font-medium">{med.name}</td>
                  <td className="py-3 text-gray-600">{med.expiryDate}</td>

                  <td className="py-3 text-center">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        isCritical
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {isCritical ? "Critical" : "Soon"}
                    </span>
                  </td>

                  <td className="py-3 text-center">
                    <button className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-500 hover:bg-red-600 hover:text-white">
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpiryReminder;
