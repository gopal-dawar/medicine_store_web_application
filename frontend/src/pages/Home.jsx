import HomeProductsSection from "../components/HomeProductsSection/HomeProductsSection";
import Header from "../components/headers/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
