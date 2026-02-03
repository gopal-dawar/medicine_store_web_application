import React from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded overflow-hidden group
      transition-all duration-300 ease-in-out
      hover:-translate-y-2 hover:shadow-xl"
    >
      {/* IMAGE AREA */}
      <div className="relative h-52 flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* quick view */}
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

      {/* INFO AREA */}
      <div className="relative h-20 overflow-hidden">
        {/* product info */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center
          transition-all duration-300
          group-hover:opacity-0 group-hover:-translate-y-2"
        >
          <h4 className="text-sm text-gray-700">{product.name}</h4>
          <p className="mt-1 text-lg font-semibold text-emerald-600">
            ${product.price}
          </p>
        </div>

        {/* add to cart */}
        <div
          className="absolute inset-0 flex justify-center items-center
          opacity-0 translate-y-6
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300"
        >
          <button className="w-full bg-emerald-600 text-white py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-emerald-700">
            <FaShoppingCart />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
