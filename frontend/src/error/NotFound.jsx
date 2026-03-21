import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">

      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 
      shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center animate-fadeIn">

        {/* Floating Icon */}
        <div className="flex justify-center mb-6 animate-bounce">
          <IoWarningOutline size={70} className="text-blue-400 drop-shadow-lg" />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-extrabold text-white tracking-wider mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-300 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          Oops! This page is not available or may have been removed.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 px-6 py-2 rounded-xl 
            bg-gradient-to-r from-blue-500 to-cyan-400 text-white 
            shadow-lg hover:scale-105 hover:shadow-blue-500/30 
            transition-all duration-300"
          >
            <FaHome />
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-xl bg-white/10 text-gray-300 
            border border-white/20 hover:bg-white/20 
            transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Floating Circles Background */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

      </div>
    </div>
  );
};

export default NotFound;