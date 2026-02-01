import React from "react";

const PromoBanner = ({ image }) => {
  return (
    <div className="relative h-56 rounded-lg overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default PromoBanner;
