import React from "react";

const SubscribeEmail = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 p-6">
      {/* Title */}
      <h3 className="text-[#4e97fd] font-semibold tracking-wide text-sm">
        SUBSCRIBE EMAIL
      </h3>

      {/* Divider */}
      <div className="w-12 h-[2px] bg-[#4e97fd] mt-2 mb-4"></div>

      {/* Text */}
      <p className="text-gray-700 text-sm mb-4">
        Sign Up For The Latest Deals and News!
      </p>

      {/* Input */}
      <input
        type="email"
        placeholder="Your email address"
        className="w-full border border-gray-300 px-4 py-2 text-sm outline-none
                   focus:border-[#4e97fd]"
      />

      {/* Button */}
      <button
        className="mt-4 bg-[#4e97fd] text-white px-6 py-2 text-sm
                   font-semibold tracking-wide hover:bg-[#3b82f6] transition"
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default SubscribeEmail;