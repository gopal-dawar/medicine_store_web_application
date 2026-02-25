import React, { useEffect, useState } from "react";
import { slideInfo } from "../../data/sliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AOS from "aos";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.refreshHard();
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const slideNext = () => {
    setDirection("next");
    triggerSlide(() => setCurrent((prev) => (prev + 1) % slideInfo.length));
  };

  const slidePrev = () => {
    setDirection("prev");
    triggerSlide(() =>
      setCurrent((prev) => (prev === 0 ? slideInfo.length - 1 : prev - 1)),
    );
  };

  const triggerSlide = (callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${slideInfo[current].image})` }}
    >
      {/* 🔹 SOFT MEDICAL OVERLAY */}
      <div className="absolute inset-0 bg-[#4e97fd]/10"></div>

      {/* ARROWS */}
      <div className="absolute top-[45%] -translate-y-1/2 flex justify-between w-full px-10 z-20">
        <div
          onClick={slidePrev}
          className="bg-white hover:bg-[#4e97fd] text-[#4e97fd] hover:text-white
                     p-3 rounded-full cursor-pointer shadow transition"
        >
          <IoIosArrowBack className="text-2xl" />
        </div>

        <div
          onClick={slideNext}
          className="bg-white hover:bg-[#4e97fd] text-[#4e97fd] hover:text-white
                     p-3 rounded-full cursor-pointer shadow transition"
        >
          <IoIosArrowForward className="text-2xl" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div
            key={current}
            className={`max-w-xl transition-all duration-300 ease-in-out
              ${
                isAnimating
                  ? direction === "next"
                    ? "opacity-0 translate-x-10"
                    : "opacity-0 -translate-x-10"
                  : "opacity-100 translate-x-0"
              }
              ${current === 0 ? "text-left" : "text-right ml-auto"}
            `}
          >
            {/* TITLE */}
            <h2
              data-aos="fade-right"
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              {slideInfo[current].title}
            </h2>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-lg mb-6 text-slate-100"
            >
              {slideInfo[current].description}
            </p>

            {/* BUTTON */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className={`inline-block bg-[#4e97fd] hover:bg-[#3b82f6]
                          text-white px-8 py-3 rounded-md font-semibold
                          cursor-pointer transition shadow
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
