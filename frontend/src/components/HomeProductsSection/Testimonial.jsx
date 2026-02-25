import React, { useEffect, useState } from "react";
import { testimonials } from "../../data/testimaldata";
import ServiceInfo from "./ServiceInfo";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AOS from "aos";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.refreshHard();
  }, [index]);

  const triggerSlide = (cb, dir) => {
    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      cb();
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    triggerSlide(
      () =>
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1)),
      "prev"
    );
  };

  const nextSlide = () => {
    triggerSlide(
      () =>
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1)),
      "next"
    );
  };

  const { text, name, role, image } = testimonials[index];

  return (
    <div data-aos="fade-up" className="max-w-xl rounded">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold tracking-wide">
          WHAT CLIENT SAY
        </h2>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-7 h-7 flex items-center justify-center
              border border-[#4e97fd] text-[#4e97fd]
              hover:bg-[#4e97fd] hover:text-white transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-7 h-7 flex items-center justify-center
              border border-[#4e97fd] text-[#4e97fd]
              hover:bg-[#4e97fd] hover:text-white transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="relative w-full mb-6">
        <div className="w-full h-[3px] bg-gray-300"></div>
        <div className="absolute top-0 left-0 w-20 h-[3px] bg-[#4e97fd]"></div>
      </div>

      {/* Content */}
      <div
        className={`bg-white w-full p-6 transition-all duration-300 ease-in-out
          ${
            isAnimating
              ? direction === "next"
                ? "opacity-0 translate-x-6"
                : "opacity-0 -translate-x-6"
              : "opacity-100 translate-x-0"
          }
        `}
      >
        <p className="italic text-gray-600 text-sm mb-6">
          “{text}”
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-sm uppercase">
              {name}
            </h4>
            <p className="text-xs text-gray-500">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <ServiceInfo />
    </div>
  );
};

export default Testimonial;