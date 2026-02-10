import React, { useEffect } from "react";
import AOS from "aos";

/* HEADER & FOOTER */
import Header from "./components/headers/Header";
import Footer from "./components/Footer";

/* HOME PAGE COMPONENTS */
import Slider from "./components/slider/Slider";
import HomeProductsSection from "./components/HomeProductsSection/HomeProductsSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import TopBrandsSlider from "./components/slider/TopBrandsSlider";

/* OTHER ROUTES */
import ShopCard from "./components/ShopCard";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

const Home = () => (
  <>
    <div className="h-[600px] overflow-hidden">
      <Slider />
    </div>

    <div className="bg-[#efefef]">
      <HomeProductsSection />
      <FeatureSection />
      <TopBrandsSlider />
    </div>
  </>
);

const Shop = () => (
  <div className="max-w-7xl mx-auto p-6 grid grid-cols-4 gap-6">
    <ShopCard />
  </div>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      {/* Always visible */}
      <Footer />
    </>
  );
};

export default App;
