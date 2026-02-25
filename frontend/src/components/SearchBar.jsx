import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-md">
      <input
        type="search"
        placeholder="Search medicines..."
        className="
          w-full px-4 py-2 rounded-md
          bg-white
          text-slate-700
          placeholder:text-slate-400
          border border-gray-300
          outline-none
          transition-all duration-300 ease-in-out
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-200
        "
      />
    </div>
  );
};

export default SearchBar;
