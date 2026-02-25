import React, { useEffect, useState } from "react";
import ProductCard from "../components/HomeProductsSection/ProductCard";
import {
  getAllCategories,
  searchMedicineByName,
  searchpagination,
} from "../api/medicineApi";

const Shop = () => {
  const [medicines, setMedicines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getAllCategories();
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (search.trim() !== "") {
      searchData();
    } else {
      fetchPaginatedData();
    }
  }, [search, page]);

  const fetchPaginatedData = async () => {
    const res = await searchpagination(page, 16);
    setMedicines(res.data.content);
    setTotalPage(res.data.totalPages);
  };

  const searchData = async () => {
    const res = await searchMedicineByName(search);
    setMedicines(res.data);
    setTotalPage(1);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Medicine Shop
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
          placeholder="Search medicine..."
          className="border p-3 rounded-lg w-full md:w-1/3 outline-0 "
        />

        <select className="border p-3 rounded-lg w-full md:w-1/4 bg-gray-100">
          <option>All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {medicines.length > 0 ? (
          medicines.map((medicine) => (
            <ProductCard key={medicine.id} product={medicine} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No medicines found.
          </p>
        )}
      </div>

      <div className="flex items-center justify-center mt-12 gap-2">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0 || search}
          className={`px-6 py-3 text-sm font-semibold border transition
            ${
              page === 0 || search
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "text-black hover:text-white hover:bg-blue-700"
            }`}
        >
          PREV
        </button>

        <div className="px-6 py-3 font-bold text-black">
          {page + 1} / {totalPage}
        </div>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 === totalPage || search}
          className={`px-6 py-3 text-sm font-semibold border transition
            ${
              page + 1 === totalPage || search
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "text-black hover:text-white hover:bg-blue-700"
            }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Shop;
