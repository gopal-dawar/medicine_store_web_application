import React from "react";
import PromoBanner from "./PromoBanner";

const PromoBannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PromoBanner image="/promobanner/banner2.jpg" />

      <PromoBanner image="/promobanner/banner1.jpg" />
    </div>
  );
};

export default PromoBannerSection;
