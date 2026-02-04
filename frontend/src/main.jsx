import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MedicineProvider } from "./context/MedicineData.jsx";

createRoot(document.getElementById("root")).render(
  <MedicineProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MedicineProvider>,
);
