import React from "react";

const PromoBanner = ({ image }) => {
  return (
    <div className="relative h-56 rounded overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt="Promo"
        className="w-full h-full object-cover
                   group-hover:scale-105 transition-transform duration-500"
      />

      {/* Brand overlay animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top */}
        <div
          className="absolute top-0 left-0 w-full h-1/2 bg-[#4e97fd]/15
          transform -translate-y-full group-hover:translate-y-0
          transition duration-500"
        />

        {/* Bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[#4e97fd]/15
          transform translate-y-full group-hover:translate-y-0
          transition duration-500"
        />

        {/* Left */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-[#4e97fd]/15
          transform -translate-x-full group-hover:translate-x-0
          transition duration-500"
        />

        {/* Right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-[#4e97fd]/15
          transform translate-x-full group-hover:translate-x-0
          transition duration-500"
        />
      </div>
    </div>
  );
};

export default PromoBanner;
