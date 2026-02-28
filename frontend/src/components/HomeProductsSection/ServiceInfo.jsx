import React from "react";
import { FaTruck, FaPhoneAlt } from "react-icons/fa";

const ServiceInfo = () => {
  return (
    <div className="flex flex-col gap-5 mt-2">
      <div className="flex items-center gap-4 bg-white p-4">
        <div className="w-12 h-12 bg-[#4e97fd] flex items-center justify-center">
          <FaTruck className="text-white text-xl" />
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase">
            Free Shipping Item
          </h4>
          <p className="text-xs text-gray-500">Order over $50.00</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-white px-4">
        <div className="w-12 h-12 bg-[#4e97fd] flex items-center justify-center">
          <FaPhoneAlt className="text-white text-lg" />
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase">
            Online Support 24/7
          </h4>
          <p className="text-xs text-gray-500">Quisque at orci gravida</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
