import React, { useEffect, useState } from "react";
import { deleteMedicine, getAllMedicines } from "../../api/medicineApi";

const Medicines = () => {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const re = await getAllMedicines();
      setMedicine(re.data);
      console.log(re.data);
    };
    fetchdata();
  }, []);

  const deletemedicine = async (id) => {
    const worningmsg = window.confirm(
      "Are you sure you want to delete this medicine?",
    );

    if (!worningmsg) {
      return;
    }

    try {
      await deleteMedicine(id);
      setMedicine((prev) => prev.filter((med) => med.id !== id));
    } catch (error) {
      alert("Failed to delete medicine ", error);
    }
  };

  return (
    <div className="mx-10 mt-6">
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
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

          <tbody>
            {medicine.map((med) => (
              <tr key={med.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{med.id}</td>

                <td className="p-3 flex items-center gap-3">
                  <img
                    src={med.imageUrl || "/placeholder.png"}
                    alt={med.name}
                    className="w-10 h-10 rounded object-cover border"
                  />
                  <span className="font-medium">{med.name}</span>
                </td>

                <td className="p-3">{med.manufacturer}</td>

                <td className="p-3">{med.category?.name || "N/A"}</td>

                <td className="p-3 font-semibold text-green-600">
                  ₹{med.price}
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      med.stock > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {med.stock}
                  </span>
                </td>

                <td className="p-3">{med.expiryDate}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      med.active
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {med.active ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="p-3 text-center space-x-2">
                  <button className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deletemedicine(med.id);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
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
