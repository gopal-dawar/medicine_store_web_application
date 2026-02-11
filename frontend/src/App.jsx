import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Apicheck from "./Apicheck";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/apicheck" element={<Apicheck />} />
    </Routes>
  );
};

export default App;
