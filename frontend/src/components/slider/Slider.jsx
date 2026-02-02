import React, { useEffect, useState } from "react";
import { slideInfo } from "../../data/sliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideInfo.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slideInfo.length);
  };

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? slideInfo.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="w-full h-screen bg-cover overflow-hidden bg-center relative"
      style={{ backgroundImage: `url(${slideInfo[current].image})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* controller (FIXED with z-20) */}
      <div className="absolute top-[40%] -translate-y-1/2 flex justify-between w-full px-10 z-20">
        <div
          onClick={handlePrev}
          className="bg-white/80 hover:bg-white text-black p-3 rounded-full cursor-pointer transition duration-300"
        >
          <IoIosArrowBack className="text-2xl" />
        </div>

        <div
          onClick={handleNext}
          className="bg-white/80 hover:bg-white text-black p-3 rounded-full cursor-pointer transition duration-300"
        >
          <IoIosArrowForward className="text-2xl" />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div
            key={current}
            className={`max-w-xl text-white transition-all duration-700 ease-out
              opacity-0 translate-y-4 animate-show
              ${current === 0 ? "text-left" : "text-right ml-auto"}
            `}
          >
            <h2 className="text-4xl font-bold mb-4">
              {slideInfo[current].title}
            </h2>

            <p className="text-lg mb-6">
              {slideInfo[current].description}
            </p>

            <div
              className={`inline-block bg-emerald-600 px-8 py-3 font-semibold cursor-pointer
                ${current === 0 ? "" : "ml-auto"}
              `}
            >
              {slideInfo[current].buttonText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
