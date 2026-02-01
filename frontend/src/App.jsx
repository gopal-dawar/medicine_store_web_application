import React from "react";
import Header from "./components/Headers/Header";
import Slider from "./components/slider/Slider";
import HomeProductsSection from "./components/HomeProductsSection/HomeProductsSection";
import { MedicineProvider } from "./context/MedicineData";

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
        </MedicineProvider>
      </div>
    </div>
  );
};

export default App;
