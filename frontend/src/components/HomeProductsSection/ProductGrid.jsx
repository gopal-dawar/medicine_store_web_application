import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductTabs from "./ProductTabs";
import { MedicineContext } from "../../context/MedicineData";
import arrivImg from "../../assets/arrivoffer.jpg";
import AOS from "aos";

const ProductGrid = () => {
  const products = useContext(MedicineContext);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredProducts = products.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "new") return item.category === "new arrivals";
    if (activeTab === "hot") return item.category === "hot product";
    if (activeTab === "sale") return item.category === "sell product";
    return true;
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      AOS.refreshHard();
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTab, currentPage]);

  return (
    <>
      <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex flex-col items-center">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10
            transition-all duration-300 ease-in-out
            ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}
          `}
        >
          {paginatedProducts.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="p-10 flex justify-center gap-5">
          <button
            className="px-4 py-2 border rounded transition-all duration-300
              hover:bg-emerald-600 hover:text-white hover:scale-105
              disabled:opacity-50 disabled:hover:scale-100"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span className="px-3 py-2 font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            className="px-4 py-2 border rounded transition-all duration-300
              hover:bg-emerald-600 hover:text-white hover:scale-105
              disabled:opacity-50 disabled:hover:scale-100"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* arrival banner */}
        <div
          data-aos="zoom-in"
          className="w-full overflow-hidden group relative transition-all duration-500"
        >
          <img className="w-full block" src={arrivImg} alt="Arrival Offer" />
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
