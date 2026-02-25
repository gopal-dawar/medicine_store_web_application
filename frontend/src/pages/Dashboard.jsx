import { Route, Routes } from "react-router-dom";
import Customers from "../components/dashboard/Customers";
import DashboardHome from "../components/dashboard/DashboardHome";
import DashBoardlayout from "../components/dashboard/DashBoardlayout";
import Orders from "../components/dashboard/Orders";
import Medicines from "../components/dashboard/Medicines";
import AddMedicine from "../components/dashboard/AddMedicine";
import LowStockAlert from "../components/dashboard/dashboardcards/LowStockAlert";
import ExpiryReminder from "../components/dashboard/dashboardcards/ExpiryReminder";

const Dashboard = () => {
  return (
    <Routes>
      <Route element={<DashboardHome />}>
        <Route index element={<DashBoardlayout />} />
        <Route path="medicines" element={<Medicines />} />
        <Route path="lowstock" element={<LowStockAlert place={true} />} />
        <Route path="expiremed" element={<ExpiryReminder place={true} />} />
        <Route path="addmedicine" element={<AddMedicine />} />
        <Route path="addmedicine/:id" element={<AddMedicine />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
