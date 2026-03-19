import React, { useContext } from "react";
import TopRatingSlider from "./TopRatingSlider";
import { MedicineContext } from "../../context/MedicineContext";

const FeatureGroup = () => {
  const { medicines } = useContext(MedicineContext);

  return (
    <div className="max-w-7xl mx-auto px-4  flex gap-10 justify-center">
      <TopRatingSlider data={medicines} dataheading="Most View" />
      <TopRatingSlider data={medicines} dataheading="Top Rating" />
    </div>
  );
};

export default FeatureGroup;
