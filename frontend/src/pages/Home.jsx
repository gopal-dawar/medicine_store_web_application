import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeProductsSection from "../components/HomeProductsSection/HomeProductsSection";
import Header from "../components/headers/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeProductsSection />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
