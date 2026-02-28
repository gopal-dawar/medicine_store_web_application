import React from "react";
import PromoBanner from "./PromoBanner";

const PromoBannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="transition hover:-translate-y-1">
        <PromoBanner img="/promobanner/banner2.jpg" />
      </div>
      <div className="transition hover:-translate-y-1">
        <PromoBanner img="/promobanner/banner1.jpg" />
      </div>
    </div>
  );
};

export default PromoBannerSection;
