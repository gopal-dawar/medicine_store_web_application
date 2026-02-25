import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { getMedicineById } from "../../api/medicineApi";

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
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <p className="text-slate-400 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!medicines) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <p className="text-red-500">Medicine not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", medicines);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute right-45 top-18 bg-slate-800 border border-slate-700
                   rounded-full p-3 hover:bg-slate-700 transition"
      >
        <IoClose className="text-red-400 text-2xl" />
      </button>
      <div
        className="bg-slate-800 p-8 rounded-3xl shadow-2xl max-w-5xl w-full
                      border border-slate-700 overflow-hidden"
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-8">
            <div className="rounded-2xl flex items-center justify-center">
              <img
                src={medicines.imageUrl || "/no-image.png"}
                alt={medicines.name}
                className="h-60 object-contain"
              />
            </div>

            <div className="lg:w-2/3 w-full">
              <div className="mb-6 flex">
                <div>
                  <h1 className="text-4xl font-extrabold text-slate-100">
                    {medicines.name}
                  </h1>
                  <p className="text-slate-400 text-sm mt-1">
                    Brand: {medicines.brand}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div>
                  <p className="text-sm text-slate-400">Price</p>
                  <span className="text-3xl font-bold text-green-400">
                    ₹ {medicines.price}
                  </span>
                </div>

                {medicines.active ? (
                  <span className="px-4 py-1 rounded-full text-sm bg-green-900/40 text-green-400">
                    Available
                  </span>
                ) : (
                  <span className="px-4 py-1 rounded-full text-sm bg-red-900/40 text-red-400">
                    Unavailable
                  </span>
                )}

                <button
                  onClick={handleAddToCart}
                  disabled={!medicines.active || medicines.stock === 0}
                  className={`ml-auto px-8 py-4 text-sm font-bold uppercase
          rounded-xl transition
          ${
            !medicines.active || medicines.stock === 0
              ? "bg-slate-700 text-slate-400 cursor-not-allowed"
              : "bg-slate-700 text-slate-100 hover:bg-slate-600"
          }`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[300px]  text-slate-200">
            <hr className="border-slate-700 mb-6" />

            {/* INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-8">
              {[
                ["Category", medicines.category?.name],
                ["Manufacturer", medicines.manufacturer],
                ["Batch Number", medicines.batchNumber],
                ["Dosage", medicines.dosage],
                ["Stock", `${medicines.stock} units`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="bg-slate-900 p-3 rounded-xl border border-slate-700"
                >
                  <p className="text-xs uppercase text-slate-400">{label}</p>
                  <p className="text-slate-100 font-medium mt-1">
                    {value || "-"}
                  </p>
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-300 uppercase mb-2">
                Description
              </h3>
              <p className="text-slate-300">{medicines.description}</p>
            </div>

            {/* DATES */}
            <div className="flex justify-between text-sm text-slate-400">
              <p>
                <span className="text-slate-300 font-semibold">
                  Manufactured:
                </span>{" "}
                {medicines.manufactureDate}
              </p>
              <p>
                <span className="text-slate-300 font-semibold">Expiry:</span>{" "}
                {medicines.expiryDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
