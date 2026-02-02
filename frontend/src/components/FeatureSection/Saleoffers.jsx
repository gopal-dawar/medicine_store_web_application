import React from "react";
import arrivImg1 from "/offerimg/offere1.jpg";
import arrivImg2 from "/offerimg/offere2.jpg";

const Saleoffers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  flex gap-10">
      <div className="w-full overflow-hidden group relative">
        {/* Image */}
        <img className="w-full block" src={arrivImg1} alt="Arrival Offer" />

        {/* Overlay Container */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-black/10 
            transform -translate-y-full group-hover:translate-y-0 
            transition duration-500"
          />

          {/* Bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black/10 
            transform translate-y-full group-hover:translate-y-0 
            transition duration-500"
          />

          {/* Left */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-black/10 
            transform -translate-x-full group-hover:translate-x-0 
            transition duration-500"
          />

          {/* Right */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-black/10 
            transform translate-x-full group-hover:translate-x-0 
            transition duration-500"
          />
        </div>
      </div>
      <div className="w-full overflow-hidden group relative">
        {/* Image */}
        <img className="w-full block" src={arrivImg2} alt="Arrival Offer" />

        {/* Overlay Container */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-black/10 
                    transform -translate-y-full group-hover:translate-y-0 
                    transition duration-500"
          />

          {/* Bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black/10 
                    transform translate-y-full group-hover:translate-y-0 
                    transition duration-500"
          />

          {/* Left */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-black/10 
                    transform -translate-x-full group-hover:translate-x-0 
                    transition duration-500"
          />

          {/* Right */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-black/10 
                    transform translate-x-full group-hover:translate-x-0 
                    transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Saleoffers;
