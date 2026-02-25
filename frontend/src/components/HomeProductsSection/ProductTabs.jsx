import React from "react";

const ProductTabs = ({ activeTab, setActiveTab }) => {
  const tabBase = "px-5 py-2 text-sm font-medium border-b-2 transition";
  const active = "border-[#4e97fd] text-[#4e97fd]";
  const inactive = "border-transparent text-gray-500 hover:text-[#4e97fd]";

  return (
    <div className="flex gap-6 border-b border-gray-200 mt-8">
      <button
        className={`${tabBase} ${activeTab === "all" ? active : inactive}`}
        onClick={() => setActiveTab("all")}
      >
        ALL PRODUCTS
      </button>

      <button
        className={`${tabBase} ${activeTab === "new" ? active : inactive}`}
        onClick={() => setActiveTab("new")}
      >
        NEW ARRIVALS
      </button>

      <button
        className={`${tabBase} ${activeTab === "hot" ? active : inactive}`}
        onClick={() => setActiveTab("hot")}
      >
        HOT PRODUCTS
      </button>

      <button
        className={`${tabBase} ${activeTab === "sale" ? active : inactive}`}
        onClick={() => setActiveTab("sale")}
      >
        SALE PRODUCTS
      </button>
    </div>
  );
};

export default ProductTabs;
