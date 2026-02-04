import React, { useContext } from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { MedicineContext } from "../context/MedicineData";

const ShopCard = ({ product }) => {
  const { addToCart } = useContext(MedicineContext);

  return (
    <div
      className="bg-white border border-gray-200 rounded overflow-hidden group
      transition-all duration-300 ease-in-out
      hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image Section */}
      <div className="relative h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        <button
          className="absolute opacity-0 translate-y-4
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
          border border-white text-white px-4 py-2 text-xs
          flex items-center gap-2 hover:bg-emerald-600"
        >
          <FaEye />
          QUICK VIEW
        </button>
      </div>

      {/* Info Section */}
      <div className="p-4 text-center">
        <h3 className="text-sm text-gray-700 font-medium line-clamp-1">
          {product.name}
        </h3>

        <div className="mt-2 flex justify-center items-center gap-2">
          <span className="text-emerald-600 font-semibold">
            ₹{product.price}
          </span>
        </div>

        {/* ✅ ADD TO CART */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-emerald-600 text-white py-2 text-sm
          font-medium flex items-center justify-center gap-2
          hover:bg-emerald-700 transition"
        >
          <FaShoppingCart />
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
