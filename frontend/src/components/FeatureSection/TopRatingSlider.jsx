import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { addToCartItem } from "../../api/cartApi";

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

  const handleAddToCart = async () => {
    try {
      await addToCartItem(data.id, 1);
      alert("Added to cart");
    } catch (error) {
      console.error("Add to cart error", error);
      alert("Failed to add item");
    }
  };

  return (
    <div className="w-full pt-10">
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

      <div className="w-12 h-[2px] bg-emerald-600 mb-5"></div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        {data.slice(index, index + ITEMS_PER_SLIDE).map((item) => (
          <div
            key={item.id} 
            className="flex bg-white border-gray-200 border items-center gap-5 px-2 p-2"
          >
            <div className="w-[140px] h-[100px] border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full">
              <p className="text-sm text-gray-700 leading-snug">{item.name}</p>
              <p className="text-emerald-600 font-semibold mt-1">
                ₹{item.price}
              </p>
              <button
                onClick={handleAddToCart}
                className=" bg-[#4e97fd] text-white py-2 mt-1 rounded text-[13px] px-2  hover:bg-[#3b82f6]"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatingSlider;
