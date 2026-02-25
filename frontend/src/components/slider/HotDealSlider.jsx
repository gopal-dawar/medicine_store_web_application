import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { cardsliderData } from "../../data/cardsliderData";
import AOS from "aos";

const HotDealsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    AOS.refreshHard();
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const triggerSlide = (cb) => {
    if (isSliding) return;
    setIsSliding(true);

    setTimeout(() => {
      cb();
      setIsSliding(false);
    }, 300);
  };

  const next = () => {
    triggerSlide(() =>
      setCurrent((prev) => (prev + 1) % cardsliderData.length),
    );
  };

  const prev = () => {
    triggerSlide(() =>
      setCurrent((prev) => (prev === 0 ? cardsliderData.length - 1 : prev - 1)),
    );
  };

  return (
    <div data-aos="fade-up">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-semibold tracking-wide border-b-2 border-[#4e97fd]">
          HOT DEALS
        </h3>

        <div className="flex gap-1">
          <button
            onClick={prev}
            disabled={isSliding}
            className="border p-1 bg-white text-[#4e97fd]
              hover:bg-[#4e97fd] hover:text-white
              disabled:opacity-40 transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            disabled={isSliding}
            className="border p-1 bg-white text-[#4e97fd]
              hover:bg-[#4e97fd] hover:text-white
              disabled:opacity-40 transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden mt-5 bg-white">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cardsliderData.map((product, i) => (
            <div
              key={product.id}
              className={`min-w-full p-1 group transition-all duration-300
                ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }
              `}
            >
              {/* Image */}
              <div className="relative h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-auto transition-transform duration-500
                             group-hover:scale-110"
                />

                {/* Brand overlay */}
                <div
                  className="absolute inset-0 bg-[#4e97fd]/30
                                opacity-0 group-hover:opacity-100 transition"
                ></div>

                {/* Quick View */}
                <button
                  className="absolute opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    border border-white text-white px-4 py-2 text-xs
                    flex items-center gap-2 hover:bg-[#4e97fd]"
                >
                  <FaEye />
                  QUICK VIEW
                </button>
              </div>

              {/* Info */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700">{product.title}</p>

                <div className="mt-1 flex justify-center gap-2 items-center">
                  <span className="text-[#4e97fd] font-semibold">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ${product.oldPrice}
                  </span>
                </div>
              </div>

              {/* Countdown */}
              <div
                className="grid grid-cols-4 text-center
                              bg-[#4e97fd] text-white text-xs mt-3"
              >
                {[
                  { v: "304", l: "DAYS" },
                  { v: "00", l: "HOUR" },
                  { v: "33", l: "MINS" },
                  { v: "03", l: "SECS" },
                ].map((item, idx) => (
                  <div key={idx} className="py-2 border-r last:border-r-0">
                    <p className="font-semibold text-sm">{item.v}</p>
                    <p>{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotDealsSlider;
