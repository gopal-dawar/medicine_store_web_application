import React from "react";
import Header from "./components/Headers/Header";
import Slider from "./components/slider/Slider";
import HomeProductsSection from "./components/HomeProductsSection/HomeProductsSection";
import { MedicineProvider } from "./context/MedicineData";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import TopBrandsSlider from "./components/slider/TopBrandsSlider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="h-[600px] overflow-hidden">
        <Slider />
      </div>
      <div className="bg-[#efefef]">
        <MedicineProvider>
          <HomeProductsSection />
          <FeatureSection />
          <TopBrandsSlider />
        </MedicineProvider>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
