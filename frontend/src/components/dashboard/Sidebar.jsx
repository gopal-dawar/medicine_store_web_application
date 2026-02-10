import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded block cursor-pointer
     ${isActive ? "bg-sky-900" : "hover:bg-sky-800"}`;

  return (
    <aside className="w-64 bg-sky-700 text-white min-h-screen">
      <div className="p-6 text-2xl font-bold">💊 MedStore</div>

      <nav className="px-4 space-y-3">
        <NavLink to="/dashboard" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/medicines" className={linkClass}>
          Medicines
        </NavLink>

        <NavLink to="/dashboard/orders" className={linkClass}>
          Orders
        </NavLink>

        <NavLink to="/dashboard/customers" className={linkClass}>
          Customers
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
