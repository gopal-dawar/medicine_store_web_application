import React from "react";

const Medicines = () => {
  return (
    <div>
      <div className="bg-white rounded shadow overflow-x-auto mx-10">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Medicine</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Expiry</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                id: 1,
                name: "Paracetamol",
                company: "Cipla",
                price: 25,
                stock: 120,
                expiry: "2026-05-10",
              },
              {
                id: 2,
                name: "Amoxicillin",
                company: "Sun Pharma",
                price: 80,
                stock: 60,
                expiry: "2025-11-20",
              },
              {
                id: 3,
                name: "Vitamin C",
                company: "Himalaya",
                price: 45,
                stock: 200,
                expiry: "2027-01-15",
              },
            ].map((med) => (
              <tr key={med.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{med.id}</td>
                <td className="p-3 font-medium">{med.name}</td>
                <td className="p-3">{med.company}</td>
                <td className="p-3">₹{med.price}</td>
                <td className="p-3">{med.stock}</td>
                <td className="p-3">{med.expiry}</td>
                <td className="p-3 text-center space-x-2">
                  <button className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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
