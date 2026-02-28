import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductViewCard from "../model/ProductViewCard";
import { MedicineContext } from "../../context/MedicineContext";
import { getAllCategories } from "../../api/categoryApi";
import arrivImg from "../../assets/arrivoffer.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import PromoBanner from "./PromoBanner";

const ProductGrid = () => {
  const {
    medicines,
    loading,
    page,
    totalPages,
    setPage,
    setCategory,
    setSearch,
  } = useContext(MedicineContext);

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await getAllCategories();
      setCategories(res.data);
    };
    loadCategories();
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [page, activeCategory]);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProduct]);

  const handleCategoryChange = (catName) => {
    setCategory(catName);
    setSearch("");
    setPage(0);
  };

  if (loading) {
    return (
      <p className="text-center p-10 text-gray-500">Loading medicines...</p>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-5 py-2 rounded-full border text-sm font-medium transition
            ${
              activeCategory === null
                ? "bg-[#4e97fd] text-white"
                : "bg-white hover:bg-blue-100"
            }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.name)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition
              ${
                activeCategory === cat.name
                  ? "bg-[#4e97fd] text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10
          transition-all duration-300
          ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
          {medicines.length > 0 ? (
            medicines.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ProductCard product={item} onQuickView={setSelectedProduct} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">
              No medicines found.
            </p>
          )}
        </div>

        {/* PAGINATION */}
        <div className="p-10 flex justify-center gap-5">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 border rounded hover:bg-[#4e97fd] hover:text-white disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-3 py-2 font-medium">
            {page + 1} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page + 1 >= totalPages}
            className="px-4 py-2 border rounded hover:bg-[#4e97fd] hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div
          data-aos="zoom-in"
          className="w-full rounded border border-gray-200 overflow-hidden"
        >
          <PromoBanner img={arrivImg} />
        </div>
      </div>

      {/* QUICK VIEW */}
      {selectedProduct && (
        <ProductViewCard
          medicines={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;
