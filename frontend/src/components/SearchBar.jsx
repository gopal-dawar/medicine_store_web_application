import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-md">
      <input
        type="search"
        placeholder="Search Here..."
        className="placeholder:text-white outline-0 text-white rounded transition-all duration-300 ease-in-out w-full px-4 py-2 border-0 border-gray-300"
      />
    </div>
  );
};

export default SearchBar;
