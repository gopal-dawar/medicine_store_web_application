import React, { useEffect, useState } from "react";
import { countMedstock } from "../../../api/medicineApi";
import { useNavigate } from "react-router-dom";

const LowStockAlert = ({ limit, place = false }) => {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const re = await countMedstock();

      if (limit) {
        setMedicines(re.data.data.slice(0, limit));
      } else {
        setMedicines(re.data.data);
      }
    };
    fetchdata();
  }, []);

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

      {medicines.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          ✅ All medicines are sufficiently stocked
        </p>
      ) : (
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-2">Medicine</th>
              <th className="text-left py-2">Stock</th>
              <th className="text-center py-2">Status</th>
              <th className="text-center py-2">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {medicines.map((med) => (
              <tr key={med.id} className="hover:bg-gray-50 transition">
                <td className="py-3 font-medium">{med.name}</td>

                <td className="py-3 text-gray-600">{med.stock} left</td>

                <td className="py-3 text-center">
                  <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                    Low Stock
                  </span>
                </td>

                <td className="py-3 text-center">
                  <button
                    // order component
                    className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-500 hover:bg-red-600 hover:text-white transition"
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
