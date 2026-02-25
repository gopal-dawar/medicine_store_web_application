import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
  FaRss,
  FaTwitter,
} from "react-icons/fa";

const Nav1 = () => {
  return (
    <div className="bg-slate-900 text-slate-400 text-sm">
      <div
        className="max-w-7xl mx-auto flex justify-between items-center
                   px-4 py-2 border-b border-slate-700"
      >
        {/* Left: Social Icons */}
        <div className="flex items-center gap-3">
          {[
            FaFacebookF,
            FaTwitter,
            FaGooglePlusG,
            FaRss,
            FaPinterestP,
            FaLinkedinIn,
          ].map((Icon, i) => (
            <div
              key={i}
              className="p-2 rounded-full hover:bg-slate-800
                         hover:text-slate-100 cursor-pointer
                         transition"
            >
              <Icon size={14} />
            </div>
          ))}
        </div>

        {/* Right: Meta Info */}
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 cursor-pointer
                          hover:text-slate-100 transition"
          >
            <span className="text-base">🇺🇸</span>
            <span>English</span>
          </div>

          <span className="text-slate-600">|</span>

          <div className="cursor-pointer hover:text-slate-100 transition">
            USD
          </div>

          <span className="text-slate-600">|</span>

          <div
            className="px-3 py-1 rounded-full border border-slate-700
                       hover:bg-slate-800 hover:text-slate-100
                       cursor-pointer transition"
          >
            👤 Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
