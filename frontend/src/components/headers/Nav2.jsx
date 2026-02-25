import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSearch, BiMenu } from "react-icons/bi";

const Nav2 = () => {
  const navigate = useNavigate();

  const activeClass = "text-[#4e97fd] border-b-2 border-[#4e97fd] pb-1";

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/home/shop" },
    { name: "Categories", path: "/home/categories" },
    { name: "Blog", path: "/home/blog" },
    { name: "Pages", path: "/home/pages" },
    { name: "Contact Us", path: "/home/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-[#4e97fd] text-white font-bold px-2 py-1 rounded">
            +
          </div>
          <span className="text-xl font-bold text-slate-800">Medibazar</span>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeClass : "hover:text-[#4e97fd] transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full pl-4 pr-10 py-2 text-sm
                         focus:outline-none focus:border-[#4e97fd]"
            />
            <BiSearch className="absolute right-3 top-2.5 text-gray-500 text-lg" />
          </div>

          {/* HAMBURGER */}
          <button className="md:hidden text-2xl text-slate-700">
            <BiMenu />
          </button>

          {/* CART */}
          <button
            onClick={() => navigate("/cart")}
            className="relative bg-[#4e97fd] text-white px-5 py-2 rounded-full
                       flex items-center gap-2 hover:bg-[#3b82f6] transition"
          >
            🛒 My Cart
            <span
              className="absolute -top-2 -right-2 bg-white text-[#4e97fd]
                             text-xs px-2 rounded-full font-bold"
            >
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav2;
