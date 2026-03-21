import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { MedicineProvider } from "./context/MedicineContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { OrdersProvider } from "./context/OrdersContext.jsx";
import ErrorBoundary from "./error/ErrorBoundary.jsx";
import RouteLoader from "./routes/RouteLoader.jsx";
import ActivityProvider from "./context/ActivityContext.jsx";

createRoot(document.getElementById("root")).render(
  <MedicineProvider>
    <CategoryProvider>
      <CartProvider>
        <OrdersProvider>
          <BrowserRouter>
            <RouteLoader>
              <ErrorBoundary>
                <ActivityProvider>
                  <App />
                </ActivityProvider>
              </ErrorBoundary>
            </RouteLoader>
          </BrowserRouter>
        </OrdersProvider>
      </CartProvider>
    </CategoryProvider>
  </MedicineProvider>,
);
