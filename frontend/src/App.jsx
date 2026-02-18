import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./static/Login";
import Register from "./static/Register";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomeProductsSection from "./components/HomeProductsSection/HomeProductsSection";

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} /> {/* ✅ ADD THIS */}
      <Route path="/register" element={<Register />} />
      {/* Protected Home */}
      <Route
        path="/home/*"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomeProductsSection />} />
      </Route>
      {/* Protected Dashboard */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
