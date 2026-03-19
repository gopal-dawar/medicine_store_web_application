import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { MedicineProvider } from "./context/MedicineContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { OrdersProvider } from "./context/OrdersContext.jsx";
import ErrorBoundary from "./error/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <MedicineProvider>
    <CategoryProvider>
      <CartProvider>
        <OrdersProvider>
          <BrowserRouter>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </BrowserRouter>
        </OrdersProvider>
      </CartProvider>
    </CategoryProvider>
  </MedicineProvider>,
);
