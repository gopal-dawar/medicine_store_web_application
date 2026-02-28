import React from "react";

const ProfileModal = ({ show, onClose, user }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-semibold text-blue-600">
            {user?.fullName?.charAt(0) || "U"}
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user?.fullName || "Customer Name"}
          </h2>
        </div>

        {/* Divider */}
        <div className="my-5 border-t"></div>

        {/* Profile Info */}
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="text-gray-500">Email</span>
            <span>{user?.email || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Phone</span>
            <span>{user?.phone || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Address</span>
            <span className="text-right max-w-[220px]">
              {user?.address || "Not Provided"}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Close
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
