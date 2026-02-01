import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { cardsliderData } from "../../data/cardsliderData";

const HotDealsSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % cardsliderData.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? cardsliderData.length - 1 : prev - 1));

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-semibold tracking-wide relative border-b-emerald-600 border-b-2">
          HOT DEALS
        </h3>
        <div className="flex gap-1">
          <button
            onClick={prev}
            className="border p-1 bg-white text-emerald-600"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            className="border p-1 bg-white text-emerald-600"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden mt-5 bg-white">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cardsliderData.map((product) => (
            <div key={product.id} className="min-w-full p-1 group">
              {/* Image */}
              <div className="relative h-86 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-auto overflow-hidden"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

                {/* Quick View */}
                <button className="absolute opacity-0 group-hover:opacity-100 transition border border-white text-white px-4 py-2 text-xs flex items-center gap-2 hover:bg-emerald-600">
                  <FaEye />
                  QUICK VIEW
                </button>
              </div>

              {/* Info */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700">{product.title}</p>

                <div className="mt-1 flex justify-center gap-2 items-center">
                  <span className="text-emerald-600 font-semibold">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ${product.oldPrice}
                  </span>
                </div>
              </div>

              {/* Countdown */}
              <div className="grid grid-cols-4 text-center bg-emerald-600 text-white text-xs mt-3">
                {[
                  { v: "304", l: "DAYS" },
                  { v: "00", l: "HOUR" },
                  { v: "33", l: "MINS" },
                  { v: "03", l: "SECS" },
                ].map((item, i) => (
                  <div key={i} className="py-2 border-r last:border-r-0">
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
