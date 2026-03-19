import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedicineContext } from "../../../context/MedicineContext";

const ExpiryReminder = ({ place = false }) => {
  const { medicines } = useContext(MedicineContext);
  const navigate = useNavigate();

  const [expire, setExpire] = useState([]);

  const CRITICAL_DAYS = 20;

  useEffect(() => {
    if (!medicines) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const criticalDate = new Date(today);
    criticalDate.setDate(criticalDate.getDate() + CRITICAL_DAYS);

    const expiringSoon = medicines.filter((med) => {
      if (!med.expiryDate) return false;

      const expiry = new Date(med.expiryDate);
      if (isNaN(expiry)) return false;

      return expiry >= today && expiry <= criticalDate;
    });

    // Optional: sort by nearest expiry
    expiringSoon.sort(
      (a, b) => new Date(a.expiryDate) - new Date(b.expiryDate),
    );

    setExpire(expiringSoon);
  }, [medicines]);

  return (
    <div
      id="expiremed"
      className="bg-slate-800 overflow-x-auto rounded-2xl shadow-lg p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-yellow-400">
          ⏳ Expiring Soon
        </h3>

        <div className="flex items-center gap-3">
          {place && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2
                         border border-slate-600 rounded-md
                         bg-slate-700 text-slate-200 text-sm font-medium
                         hover:bg-slate-600 transition"
            >
              ⬅ Back
            </button>
          )}

          <span className="text-xs bg-slate-700 text-yellow-400 px-3 py-1 rounded-full">
            Next {CRITICAL_DAYS} Days
          </span>
        </div>
      </div>

      {expire.length === 0 ? (
        <p className="text-sm text-slate-400 text-center py-6">
          🎉 No medicines expiring soon
        </p>
      ) : (
        <table className="w-full text-sm">
          <thead className="text-slate-400 border-b border-slate-700">
            <tr>
              <th className="text-left py-2">Medicine</th>
              <th className="text-left py-2">Expiry</th>
              <th className="text-center py-2">Status</th>
              <th className="text-center py-2">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {expire.map((med) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const expiry = new Date(med.expiryDate);

              const diffTime = expiry - today;
              const daysLeft = Math.floor(diffTime / (1000 * 60 * 60 * 24));

              const isCritical = daysLeft <= 3;

              return (
                <tr key={med.id} className="hover:bg-slate-700 transition">
                  {/* Name */}
                  <td className="py-3 font-medium text-slate-100">
                    {med.name}
                  </td>

                  {/* Expiry */}
                  <td className="py-3 text-slate-400">
                    {expiry.toLocaleDateString()}
                  </td>

                  {/* Status */}
                  <td className="py-3 text-center">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        isCritical
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {isCritical
                        ? `Critical (${daysLeft}d)`
                        : `Soon (${daysLeft}d)`}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-3 text-center">
                    <button
                      className="px-3 py-1 text-xs rounded-full
                                 bg-slate-700 text-slate-300
                                 hover:bg-red-600 hover:text-white transition"
                    >
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
