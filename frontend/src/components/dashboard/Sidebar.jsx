import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg block cursor-pointer transition
     ${
       isActive
         ? "bg-slate-700 text-white"
         : "text-slate-300 hover:bg-slate-800 hover:text-white"
     }`;

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen shadow-lg">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-white border-b border-slate-800">
        💊 MedStore
      </div>

      {/* Navigation */}
      <nav className="px-4 py-4 space-y-2">
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
