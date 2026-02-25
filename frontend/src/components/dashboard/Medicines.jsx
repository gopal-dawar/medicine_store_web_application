import React, { useEffect, useState } from "react";
import {
  deleteMedicine,
  getAllMedicines,
  searchMedicineByName,
} from "../../api/medicineApi";
import { useNavigate } from "react-router-dom";

const Medicines = () => {
  const [medicine, setMedicine] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const re = await getAllMedicines();
      setMedicine(re.data);
    };
    fetchdata();
  }, []);

  const deletemedicine = async (id) => {
    const warning = window.confirm(
      "Are you sure you want to delete this medicine?",
    );
    if (!warning) return;

    try {
      await deleteMedicine(id);
      setMedicine((prev) => prev.filter((med) => med.id !== id));
    } catch (error) {
      alert("Failed to delete medicine", error);
    }
  };

  const searchmed = async (name) => {
    const re = await searchMedicineByName(name);
    setMedicine(re.data);
  };

  return (
    <div className="p-6 overflow-x-auto bg-slate-900 min-h-screen">
      <div className="bg-slate-800 rounded-2xl shadow-lg">
        {/* Search */}
        <div className="w-full px-6 py-4 border-b border-slate-700">
          <input
            onChange={(e) => searchmed(e.target.value)}
            type="search"
            placeholder="Search medicines..."
            className="w-full bg-slate-900 border border-slate-700
                       text-slate-200 placeholder:text-slate-500
                       px-4 py-2 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400 border-b border-slate-700">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Medicine</th>
              <th className="p-3 text-left">Manufacturer</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Expiry</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {medicine.map((med, idx) => (
              <tr key={med.id} className="hover:bg-slate-700 transition">
                <td className="p-3 text-slate-300">{idx + 1}</td>

                <td className="p-3 flex items-center gap-3 text-slate-200">
                  <img
                    src={med.imageUrl || "/placeholder.png"}
                    alt={med.name}
                    className="w-10 h-10 rounded object-cover border border-slate-700"
                  />
                  <span className="font-medium">{med.name}</span>
                </td>

                <td className="p-3 text-slate-400">{med.manufacturer}</td>

                <td className="p-3 text-slate-400">
                  {med.category?.name || "N/A"}
                </td>

                <td className="p-3 text-slate-200 font-semibold">
                  ₹{med.price}
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      med.stock > 0
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {med.stock}
                  </span>
                </td>

                <td className="p-3 text-slate-400">{med.expiryDate}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      med.active
                        ? "bg-slate-600/40 text-slate-200"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {med.active ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => navigate(`/dashboard/addmedicine/${med.id}`)}
                    className="px-3 py-1 text-xs rounded
                               bg-slate-700 text-slate-200
                               hover:bg-slate-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deletemedicine(med.id)}
                    className="px-3 py-1 text-xs rounded
                               bg-slate-700 text-slate-200
                               hover:bg-red-600 hover:text-white transition"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => navigate(`/dashboard/meddetails/${med.id}`)}
                    className="px-3 py-1 text-xs rounded
                               bg-slate-700 text-slate-200
                               hover:bg-slate-600 transition"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Medicines;
