import React, { useContext } from "react";
import TopRatingSlider from "./TopRatingSlider";
import { MedicineContext } from "../../context/MedicineData";

const FeatureGroup = () => {
  const { mostview, toprating } = useContext(MedicineContext);

  return (
    <div className="max-w-7xl mx-auto px-4  flex gap-10 justify-center">
      <TopRatingSlider data={mostview} dataheading="Most View" />
      <TopRatingSlider data={toprating} dataheading="Top Rating" />
    </div>
  );
};

export default FeatureGroup;
