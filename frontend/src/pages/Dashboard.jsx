import { Route, Routes } from "react-router-dom";
import Customers from "../components/dashboard/Customers";
import DashboardHome from "../components/dashboard/DashboardHome";
import DashBoardlayout from "../components/dashboard/DashBoardlayout";
import Orders from "../components/dashboard/Orders";
import Medicines from "../components/dashboard/Medicines";
import AddMedicine from "../components/dashboard/AddMedicine";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />}>
        <Route index element={<DashBoardlayout />} />
        <Route path="medicines" element={<Medicines />} />
        <Route path="addmedicine" element={<AddMedicine />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
