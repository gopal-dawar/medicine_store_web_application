import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterestP, FaRss, FaTwitter } from "react-icons/fa";

const Nav1 = () => {
  return (
    <div className="bg-[#1a1a1a] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 border-b border-emerald-500">
        {/* Left: Social Icons */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaGooglePlusG className="hover:text-white cursor-pointer" />
          <FaRss className="hover:text-white cursor-pointer" />
          <FaPinterestP className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
        </div>

        {/* Right: Language & Currency */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            🇺🇸 <span>English</span>
          </div>
          <div className="cursor-pointer hover:text-white">USD</div>
          <div className="cursor-pointer hover:text-white">👤</div>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
