import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/categoryApi";

const ProductCategorySidebar = () => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState(category[0]);

  useEffect(() => {
    const fetchcat = async () => {
      const re = await getAllCategories();
      setCategory(re.data);
    };
    fetchcat();
  }, []);
  return (
    <div className="bg-[#4e97fd] text-white rounded overflow-hidden shadow">
      <h3 className="bg-[#3b82f6] px-5 py-4 font-semibold text-sm tracking-wide">
        PRODUCT CATEGORIES
      </h3>

      <ul className="divide-y divide-[#6aa8ff]">
        {category.map((cat) => (
          <li
            key={cat.id}
            onClick={() => setActive(cat)}
            className={`px-5 py-3 text-sm cursor-pointer transition-all duration-300
              ${
                active === cat
                  ? "bg-white text-[#4e97fd] font-semibold"
                  : "hover:bg-white hover:text-[#4e97fd]"
              }
            `}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorySidebar;
