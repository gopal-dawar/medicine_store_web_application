import React, { useContext, useEffect, useState } from "react";
import TopRatingSlider from "./TopRatingSlider";
import { getAllMedicines } from "../../api/medicineApi";

const FeatureGroup = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const re = await getAllMedicines();
      setData(re.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4  flex gap-10 justify-center">
      <TopRatingSlider data={data} dataheading="Most View" />
      <TopRatingSlider data={data} dataheading="Top Rating" />
    </div>
  );
};

export default FeatureGroup;
