import React from "react";
import ProductCategorySidebar from "./ProductCategorySidebar";
import PromoBannerSection from "./PromoBannerSection";
import ProductGrid from "./ProductGrid";

const HomeProductsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductCategorySidebar />
        </div>
        <div className="lg:col-span-3 space-y-8">
          <PromoBannerSection />
          <ProductGrid /> {/* ProductTabs is inside this */}
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSection;
