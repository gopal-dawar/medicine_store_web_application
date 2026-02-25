import React, { useEffect, useState } from "react";
import ProductCard from "../components/HomeProductsSection/ProductCard";
import { getAllCategories, getAllMedicines } from "../api/medicineApi";
const Shop = () => {
  const [medicines, setMedicines] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const re = await getAllMedicines();
      setMedicines(re.data);

      const ct = await getAllCategories();
      setCategory(ct.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="p-6 min-h-screen max-w-7xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Medicine Shop
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="Search medicine..."
          className="border p-3 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="border p-3 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Categories</option>
          {category.map((cat) => {
            return <option key={cat.id}>{cat.name}</option>;
          })}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {medicines.map((medicine) => (
          <ProductCard product={medicine} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
