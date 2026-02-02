import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ITEMS_PER_SLIDE = 6;

const TopRatingSlider = ({ data, dataheading }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index + ITEMS_PER_SLIDE < data.length) {
      setIndex(index + ITEMS_PER_SLIDE);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index - ITEMS_PER_SLIDE >= 0) {
      setIndex(index - ITEMS_PER_SLIDE);
    } else {
      const lastIndex =
        Math.floor((data.length - 1) / ITEMS_PER_SLIDE) * ITEMS_PER_SLIDE;
      setIndex(lastIndex);
    }
  };

  const visibleProducts = data.slice(index, index + ITEMS_PER_SLIDE);

  return (
    <div className="w-full pt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold uppercase">{dataheading}</h2>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className="w-7 h-7 border flex justify-center items-center  bg-white text-emerald-600 disabled:opacity-40"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={index + ITEMS_PER_SLIDE >= data.length}
            className="w-7 h-7 border flex justify-center items-center bg-white text-emerald-600 disabled:opacity-40"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* underline */}
      <div className="w-12 h-[2px] bg-emerald-600 mb-5"></div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        {visibleProducts.map((item) => (
          <div key={item.id} className="flex bg-white items-center gap-5 p-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-23 h-23 object-contain"
            />

            <div>
              <p className="text-sm text-gray-700 leading-snug">{item.name}</p>
              <p className="text-emerald-600 font-semibold mt-1">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatingSlider;
