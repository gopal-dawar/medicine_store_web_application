import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductTabs from "./ProductTabs";
import ProductViewCard from "../model/ProductViewCard";
import { MedicineContext } from "../../context/MedicineData";
import arrivImg from "../../assets/arrivoffer.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductGrid = () => {
  const { medicine, loading, error } = useContext(MedicineContext);

  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);
  
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab, currentPage]);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProduct]);

  if (loading) {
    return (
      <p className="text-center p-10 text-gray-500">Loading medicines...</p>
    );
  }

  if (error) {
    return <p className="text-center p-10 text-red-500">{error}</p>;
  }

  const filteredProducts = medicine.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "new") return item.category === "new arrivals";
    if (activeTab === "hot") return item.category === "hot product";
    if (activeTab === "sale") return item.category === "sell product";
    return true;
  });

  // ---------------- PAGINATION ----------------
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex flex-col items-center">
        {/* PRODUCT GRID */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10
          transition-all duration-300
          ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
        >
          {paginatedProducts.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard product={item} onQuickView={setSelectedProduct} />
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="p-10 flex justify-center gap-5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded hover:bg-[#4e97fd] hover:text-white disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-3 py-2 font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded hover:bg-[#4e97fd] hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* ARRIVAL BANNER */}
        <div data-aos="zoom-in" className="w-full overflow-hidden">
          <img src={arrivImg} alt="Arrival Offer" />
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
