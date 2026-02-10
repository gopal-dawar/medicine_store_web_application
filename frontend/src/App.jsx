import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
