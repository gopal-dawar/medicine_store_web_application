import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { countMedStock } from "../../../api/medicineApi";

const LowStockAlert = ({ limit, place = false }) => {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const re = await countMedStock();
      if (limit) {
        setMedicines(re.data.data.slice(0, limit));
      } else {
        setMedicines(re.data.data);
      }
    };
    fetchdata();
  }, [limit]);

  return (
    <div className="bg-slate-800 overflow-x-auto rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-yellow-400">
          ⚠ Low Stock Alert
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
            Low Quantity
          </span>
        </div>
      </div>

      {/* Empty State */}
      {medicines.length === 0 ? (
        <p className="text-sm text-slate-400 text-center py-6">
          ✅ All medicines are sufficiently stocked
        </p>
      ) : (
        <table className="w-full text-sm">
          <thead className="text-slate-400 border-b border-slate-700">
            <tr>
              <th className="text-left py-2">Medicine</th>
              <th className="text-left py-2">Stock</th>
              <th className="text-center py-2">Status</th>
              <th className="text-center py-2">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {medicines.map((med) => (
              <tr key={med.id} className="hover:bg-slate-700 transition">
                <td className="py-3 font-medium text-slate-100">{med.name}</td>

                <td className="py-3 text-slate-400">{med.stock} left</td>

                <td className="py-3 text-center">
                  <span className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
                    Low Stock
                  </span>
                </td>

                <td className="py-3 text-center">
                  <button
                    className="px-3 py-1 text-xs rounded-full
                               bg-slate-700 text-slate-300
                               hover:bg-blue-600 hover:text-white transition"
                  >
                    Order Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LowStockAlert;
