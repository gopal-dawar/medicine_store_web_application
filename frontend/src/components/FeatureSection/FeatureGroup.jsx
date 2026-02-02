import React from "react";
import TopRatingSlider from "./TopRatingSlider";
import { mostview, toprating } from "../../data/featuresdata";

const FeatureGroup = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  flex gap-10 justify-center">
      <TopRatingSlider data={mostview} dataheading="Most View" />
      <TopRatingSlider data={toprating} dataheading="Top Rating" />
    </div>
  );
};

export default FeatureGroup;
