import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import ProductTabs from "./ProductTabs";
import { MedicineContext } from "../../context/MedicineData";
import arrivImg from "../../assets/arrivoffer.jpg";

const ProductGrid = () => {
  const products = useContext(MedicineContext);
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = products.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "new") return item.category === "new arrivals";
    if (activeTab === "hot") return item.category === "hot product";
    if (activeTab === "sale") return item.category === "sell product";
    return true;
  });
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {paginatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="p-10 flex justify-center gap-5">
          <button
            className="px-4 py-2 border rounded
               transition-all duration-300 ease-in-out
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
            className="px-4 py-2 border rounded
               transition-all duration-300 ease-in-out
               hover:bg-emerald-600 hover:text-white hover:scale-105
               disabled:opacity-50 disabled:hover:scale-100"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div className="w-full overflow-hidden group relative">
          {/* Image */}
          <img className="w-full block" src={arrivImg} alt="Arrival Offer" />

          {/* Overlay Container */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top */}
            <div
              className="absolute top-0 left-0 w-full h-1/2 bg-black/10 
      transform -translate-y-full group-hover:translate-y-0 
      transition duration-500"
            />

            {/* Bottom */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/2 bg-black/10 
      transform translate-y-full group-hover:translate-y-0 
      transition duration-500"
            />

            {/* Left */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-black/10 
      transform -translate-x-full group-hover:translate-x-0 
      transition duration-500"
            />

            {/* Right */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-black/10 
      transform translate-x-full group-hover:translate-x-0 
      transition duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
