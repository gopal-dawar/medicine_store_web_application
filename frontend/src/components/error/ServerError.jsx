import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">
        <div className="flex justify-center mb-4">
          <MdErrorOutline size={60} className="text-red-500" />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">500</h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Server Error
        </h2>

        <p className="text-gray-500 mb-6">
          Something went wrong on our side. Please try again later.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <FaHome />
            Go Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
