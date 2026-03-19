import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedicineContext } from "../../../context/MedicineContext";

const LowStockAlert = ({ place = false }) => {
  const { medicines } = useContext(MedicineContext);
  const navigate = useNavigate();

  const [lowstockmed, setLowstockmed] = useState([]);

  const getStockStatus = (stock) => {
    if (stock === 0) return "OUT";
    if (stock <= 5) return "CRITICAL";
    return "LOW";
  };

  useEffect(() => {
    if (!medicines) return;

    const lowMed = medicines.filter((med) => med.stock <= 20);
    setLowstockmed(lowMed);
  }, [medicines]);

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
            Stock ≤ 20
          </span>
        </div>
      </div>

      {/* Empty State */}
      {lowstockmed.length === 0 ? (
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
            {lowstockmed.map((med) => {
              const status = getStockStatus(med.stock);

              return (
                <tr key={med.id} className="hover:bg-slate-700 transition">
                  {/* Medicine Name */}
                  <td className="py-3 font-medium text-slate-100">
                    {med.name}
                  </td>

                  {/* Stock */}
                  <td className="py-3 text-slate-400">{med.stock} left</td>

                  {/* Status */}
                  <td className="py-3 text-center">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        status === "OUT"
                          ? "bg-red-600/20 text-red-500"
                          : status === "CRITICAL"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {status === "OUT"
                        ? "Out of Stock"
                        : status === "CRITICAL"
                          ? "Critical"
                          : "Low"}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-3 text-center">
                    <button
                      className={`px-3 py-1 text-xs rounded-full transition ${
                        med.stock === 0
                          ? "bg-red-600 text-white"
                          : "bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white"
                      }`}
                    >
                      {med.stock === 0 ? "Restock Urgent" : "Order Now"}
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

export default LowStockAlert;
