import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import { BiSearch } from "react-icons/bi";

const Nav2 = () => {
  const [searchbar, setSearchbar] = useState(false);
  const navigate = useNavigate();
  const activecss = {
    borderBottom: "2px solid white",
  };

  return (
    <div className="bg-emerald-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <ul className="flex gap-8 text-white font-semibold">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activecss : undefined)}
              className="hover:border-b-2 hover:border-white pb-1"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              style={({ isActive }) => (isActive ? activecss : undefined)}
              className="hover:border-b-2 hover:border-white pb-1"
            >
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pharmacy"
              style={({ isActive }) => (isActive ? activecss : undefined)}
              className="hover:border-b-2 hover:border-white pb-1"
            >
              PHARMACY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => (isActive ? activecss : undefined)}
              className="hover:border-b-2 hover:border-white pb-1"
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              style={({ isActive }) => (isActive ? activecss : undefined)}
              className="hover:border-b-2 hover:border-white pb-1"
            >
              PAGES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activecss : undefined)}
              className="hover:border-b-2 hover:border-white pb-1"
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              style={({ isActive }) => (isActive ? activecss : undefined)}
              className="hover:border-b-2 hover:border-white pb-1"
            >
              FEATURES
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {searchbar && <SearchBar />}
            <div
              onClick={() => setSearchbar(!searchbar)}
              className="bg-white text-emerald-600 px-3 py-2 cursor-pointer"
            >
              <BiSearch className="text-2xl" />
            </div>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="border border-white text-white px-5 py-2 cursor-pointer font-semibold"
          >
            0 ITEM - $0.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
