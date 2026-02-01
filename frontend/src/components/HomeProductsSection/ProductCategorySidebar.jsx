import React from "react";

const categories = [
  "Accessories",
  "Hats and Gloves",
  "Lifestyle",
  "Bras",
  "Evening",
  "Long Sleeved",
  "Short Sleeved",
  "Tanks and Camis",
];

const ProductCategorySidebar = () => {
  return (
    <div className="bg-emerald-600 text-white rounded-lg overflow-hidden">
      
      {/* Header */}
      <h3 className="bg-emerald-700 px-5 py-4 font-semibold text-sm tracking-wide">
        PRODUCT CATEGORIES
      </h3>

      {/* Category List */}
      <ul className="divide-y divide-emerald-500">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="px-5 py-3 text-sm cursor-pointer hover:bg-white hover:text-emerald-600 transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorySidebar;
