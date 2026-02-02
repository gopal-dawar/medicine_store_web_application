import React, { useState } from "react";
import { testimonials } from "../../data/testimaldata";
import ServiceInfo from "./ServiceInfo";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { text, name, role, image } = testimonials[index];

  return (
    <div className="max-w-xl rounded">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold tracking-wide">WHAT CLIENT SAY</h2>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-7 h-7 flex items-center justify-center border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-7 h-7 flex items-center justify-center border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="relative w-full mb-6">
        {/* Gray full width line */}
        <div className="w-full h-[3px] bg-gray-300"></div>
        {/* Green accent line */}
        <div className="absolute top-0 left-0 w-20 h-[3px] bg-emerald-600"></div>
      </div>

      <div className="bg-white w-full p-6">
        <p className="italic text-gray-600 text-sm mb-6">“{text}”</p>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-sm uppercase">{name}</h4>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </div>

      <ServiceInfo />
    </div>
  );
};

export default Testimonial;
