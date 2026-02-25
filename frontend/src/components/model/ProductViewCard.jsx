import React from "react";
import { IoClose } from "react-icons/io5";
import { addToCartitem } from "../../api/medicineApi";

const ProductViewCard = ({ medicines, onClose }) => {
  if (!medicines) return null;

  const handleAddToCart = async (medicineId) => {
    try {
      const userId = 1;

      await addToCartitem(userId, medicineId, 1);

      alert("Added to cart ✅");
    } catch (error) {
      console.error(error);
      alert("Failed to add item ❌");
    }
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/20 bg-opacity-90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white shadow-md rounded-full p-2 hover:bg-red-50 transition"
          title="Close"
        >
          <IoClose className="text-red-600 text-2xl" />
        </button>

        <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-10">
          <img
            src={medicines.imageUrl || "/no-image.png"}
            alt={medicines.name}
            className="max-h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-8 flex flex-col">
          <h1 className="text-3xl font-extrabold text-gray-800">
            {medicines.name}
          </h1>
          <p className="text-sm text-gray-500 mb-4">Brand: {medicines.brand}</p>

          <div className="mb-4">
            <p className="text-xs uppercase text-gray-500">Price</p>
            <p className="text-3xl font-bold text-green-700">
              ₹ {medicines.price}
            </p>
          </div>

          <div className="mb-4">
            {medicines.stock > 10 && (
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                In Stock
              </span>
            )}
            {medicines.stock > 0 && medicines.stock <= 10 && (
              <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-700">
                Only {medicines.stock} left
              </span>
            )}
            {medicines.stock === 0 && (
              <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                Out of Stock
              </span>
            )}
          </div>

          <div className="text-sm text-gray-600 mb-4 space-y-1">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {medicines.category?.name}
            </p>
            <p>
              <span className="font-semibold">Expiry Date:</span>{" "}
              {medicines.expiryDate}
            </p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {medicines.description}
          </p>

          <button
            onClick={() => handleAddToCart(medicines.id)}
            disabled={!medicines.active || medicines.stock === 0}
            className={`mt-auto w-full py-4 text-sm font-bold uppercase tracking-wide transition rounded-xl
              ${
                !medicines.active || medicines.stock === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewCard;
