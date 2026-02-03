import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AOS from "aos";

const ITEMS_PER_SLIDE = 6;

const TopBrandsSlider = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const brands = [
    { id: 1, name: "CodeCanyon", img: "brandimg/brand1.png" },
    { id: 2, name: "ThemeForest", img: "brandimg/brand2.jpg" },
    { id: 3, name: "PhotoDune", img: "brandimg/brand5.jpg" },
    { id: 4, name: "ActiveDen", img: "brandimg/brand4.png" },
    { id: 5, name: "AudioJungle", img: "brandimg/brand5.jpg" },
    { id: 6, name: "CodeCanyon", img: "brandimg/brand1.png" },
    { id: 7, name: "ThemeForest", img: "brandimg/brand2.jpg" },
    { id: 8, name: "PhotoDune", img: "brandimg/brand1.png" },
    { id: 9, name: "ActiveDen", img: "brandimg/brand4.png" },
    { id: 10, name: "AudioJungle", img: "brandimg/brand5.jpg" },
  ];

  useEffect(() => {
    AOS.refreshHard();
  }, [index]);

  const triggerSlide = (cb) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      cb();
      setIsAnimating(false);
    }, 300);
  };

  const nextSlide = () => {
    triggerSlide(() => {
      if (index + ITEMS_PER_SLIDE < brands.length) {
        setIndex(index + ITEMS_PER_SLIDE);
      } else {
        setIndex(0);
      }
    });
  };

  const prevSlide = () => {
    triggerSlide(() => {
      if (index - ITEMS_PER_SLIDE >= 0) {
        setIndex(index - ITEMS_PER_SLIDE);
      } else {
        const lastIndex =
          Math.floor((brands.length - 1) / ITEMS_PER_SLIDE) * ITEMS_PER_SLIDE;
        setIndex(lastIndex);
      }
    });
  };

  const visibleBrands = brands.slice(index, index + ITEMS_PER_SLIDE);

  return (
    <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold uppercase">Top Brands</h2>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-7 h-7 flex justify-center items-center
              border border-emerald-600 text-emerald-600
              hover:bg-emerald-600 hover:text-white
              disabled:opacity-40 transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-7 h-7 flex justify-center items-center
              border border-emerald-600 text-emerald-600
              hover:bg-emerald-600 hover:text-white
              disabled:opacity-40 transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* underline */}
      <div className="relative w-full">
        <div className="w-full h-[3px] bg-gray-300"></div>
        <div className="absolute top-0 left-0 w-20 h-[3px] bg-emerald-600"></div>
      </div>

      {/* Brands */}
      <div
        className={`grid grid-cols-6 mt-5 gap-6 transition-all duration-300
          ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
      >
        {visibleBrands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center
              transition-transform duration-300 hover:scale-110"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="h-18 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrandsSlider;
