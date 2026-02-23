import React, { useState } from "react";
import medicines from "../data/medicines";
import MedicineCard from "../components/MedicineCard";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMedicines = medicines.filter((med) => {
    const matchesSearch = med.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || med.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Medicine Shop</h1>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Pain Relief">Pain Relief</option>
          <option value="Antibiotic">Antibiotic</option>
          <option value="Allergy">Allergy</option>
          <option value="Vitamins">Vitamins</option>
        </select>
      </div>

      {/* Medicine List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))
        ) : (
          <p>No medicines found.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;