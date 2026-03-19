import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./static/Login";
import Register from "./static/Register";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomeProductsSection from "./components/HomeProductsSection/HomeProductsSection";
import Shop from "./pages/Shop";
import ProductViewCard from "./components/model/ProductViewCard";
import OtpVerification from "./static/OtpVerification";
import MyOrders from "./components/HomeProductsSection/MyOrders";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otpverification" element={<OtpVerification />} />

      <Route
        path="/home/*"
        element={
          <ProtectedRoute allowedRoles={["USER"]}>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomeProductsSection />} />
        <Route path="shop" element={<Shop />} />
        <Route path="viewmeddetails/:id" element={<ProductViewCard />} />
        <Route path="myorders" element={<MyOrders />} />
      </Route>
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
