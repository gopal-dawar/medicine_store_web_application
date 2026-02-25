import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMedicineById } from "../api/medicineApi";
import { IoClose } from "react-icons/io5";

const MedicineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [medicines, setMedicines] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMedicineById(id);
        setMedicines(res.data);
      } catch (error) {
        console.error("Error fetching medicine", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (!medicines) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Medicine not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative">

      {/* ❌ Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 bg-white shadow-md rounded-full p-2 hover:bg-red-50 transition"
        title="Close"
      >
        <IoClose className="text-red-600 text-2xl" />
      </button>

      <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        
        {/* Image Section */}
        <div className="bg-gray-50 flex items-center justify-center p-6">
          <img
            src={medicines.imageUrl || "/no-image.png"}
            alt={medicines.name}
            className="max-h-96 object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="md:col-span-2 p-8">
          
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {medicines.name}
            </h1>
            <p className="text-gray-500">{medicines.brand}</p>
          </div>

          {/* Price & Status */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-semibold text-green-700">
              ₹ {medicines.price}
            </span>

            {medicines.active ? (
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                Active
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                Inactive
              </span>
            )}
          </div>

          {/* Category */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase">
              Category
            </h3>
            <p className="text-gray-800">{medicines.category?.name}</p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-xs text-gray-500">Manufacturer</p>
              <p className="text-gray-800">{medicines.manufacturer}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Batch Number</p>
              <p className="text-gray-800">{medicines.batchNumber}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Dosage</p>
              <p className="text-gray-800">{medicines.dosage}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Stock</p>
              <p
                className={`font-medium ${
                  medicines.stock > 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {medicines.stock} units
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {medicines.description}
            </p>
          </div>

          {/* Dates */}
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 mb-4">
            <p>
              <span className="font-semibold">Manufacture:</span>{" "}
              {medicines.manufactureDate}
            </p>
            <p>
              <span className="font-semibold">Expiry:</span>{" "}
              {medicines.expiryDate}
            </p>
          </div>

          {/* Footer */}
          <div className="border-t pt-3 text-xs text-gray-400">
            Created At: {medicines.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;