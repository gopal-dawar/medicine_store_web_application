import { Route, Routes } from "react-router-dom";
import Customers from "../components/dashboard/Customers";
import DashboardHome from "../components/dashboard/DashboardHome";
import DashBoardlayout from "../components/dashboard/DashBoardlayout";

import Medicines from "../components/dashboard/Medicines";
import AddMedicine from "../components/dashboard/AddMedicine";
import LowStockAlert from "../components/dashboard/dashboardcards/LowStockAlert";
import ExpiryReminder from "../components/dashboard/dashboardcards/ExpiryReminder";
import MedicineDetails from "../components/model/MedicineDetails";
import Orders from "../components/dashboard/orders/Orders";
import ViewOrders from "../components/dashboard/orders/ViewOrders";

const Dashboard = () => {
  return (
    <Routes>
      <Route element={<DashboardHome />}>
        <Route index element={<DashBoardlayout />} />
        <Route path="medicines" element={<Medicines />} />
        <Route path="lowstock" element={<LowStockAlert place={true} />} />
        <Route path="expiremed" element={<ExpiryReminder place={true} />} />
        <Route path="meddetails/:id" element={<MedicineDetails />} />
        <Route path="addmedicine" element={<AddMedicine />} />
        <Route path="addmedicine/:id" element={<AddMedicine />} />
        <Route path="orders" element={<Orders />}>
          <Route path=":id" element={<ViewOrders />} />
        </Route>
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
