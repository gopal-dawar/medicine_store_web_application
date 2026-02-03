import React, { useState } from "react";

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
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="bg-emerald-600 text-white rounded overflow-hidden">
      {/* Header */}
      <h3 className="bg-emerald-700 px-5 py-4 font-semibold text-sm tracking-wide">
        PRODUCT CATEGORIES
      </h3>

      {/* Category List */}
      <ul className="divide-y divide-emerald-500">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-3 text-sm cursor-pointer transition-all duration-300
              ${
                active === cat
                  ? "bg-white text-emerald-600 font-semibold"
                  : "hover:bg-white hover:text-emerald-600"
              }
            `}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorySidebar;
