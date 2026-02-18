import React from "react";
import ProductCategorySidebar from "./ProductCategorySidebar";
import PromoBannerSection from "./PromoBannerSection";
import ProductGrid from "./ProductGrid";
import HotDealSlider from "../slider/HotDealSlider";
import SubscribeEmail from "./SubscribeEmail";
import NewBlogs from "./NewBlogs";
import Testimonial from "./Testimonial";
import Slider from "../slider/Slider";

const HomeProductsSection = () => {
  return (
    <div>
      <Slider />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-5 ">
            <ProductCategorySidebar />
          
            <HotDealSlider />
            <SubscribeEmail />
            <Testimonial />
          </div>
          <div className="lg:col-span-3 space-y-8">
            <PromoBannerSection />
            <ProductGrid />
            <NewBlogs />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProductsSection;
