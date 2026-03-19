import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./static/Login";
import Register from "./static/Register";
import OtpVerification from "./static/OtpVerification";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";

import ProtectedRoute from "./routes/ProtectedRoute";

import HomeProductsSection from "./components/HomeProductsSection/HomeProductsSection";
import ProductViewCard from "./components/model/ProductViewCard";
import MyOrders from "./components/HomeProductsSection/MyOrders";
import ServerError from "./error/ServerError";
import NotFound from "./error/NotFound";

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

      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
