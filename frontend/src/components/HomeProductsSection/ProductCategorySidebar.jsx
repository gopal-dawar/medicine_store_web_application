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
    <div className="bg-[#4e97fd] text-white rounded overflow-hidden shadow">
      {/* Header */}
      <h3 className="bg-[#3b82f6] px-5 py-4 font-semibold text-sm tracking-wide">
        PRODUCT CATEGORIES
      </h3>

      {/* Category List */}
      <ul className="divide-y divide-[#6aa8ff]">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-3 text-sm cursor-pointer transition-all duration-300
              ${
                active === cat
                  ? "bg-white text-[#4e97fd] font-semibold"
                  : "hover:bg-white hover:text-[#4e97fd]"
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