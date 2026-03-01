import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ show, onClose, user }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("role");
    onClose();
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30">
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl p-6">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-semibold text-blue-600">
            {user?.fullName?.charAt(0) || "U"}
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user?.fullName || "Customer Name"}
          </h2>

          <p className="text-sm text-gray-500">{user?.role || "USER"}</p>
        </div>

        {/* Divider */}
        <div className="my-5 border-t"></div>

        {/* Profile Info */}
        <div className="space-y-3 text-sm text-gray-700">
          <Info label="Email" value={user?.email} />
          <Info label="Phone" value={user?.phone} />
          <Info label="Address" value={user?.address} />

          <Info label="User ID" value={user?.id} />
          <Info label="Status" value={user?.active ? "Active" : "Inactive"} />
          <Info
            label="Member Since"
            value={
              user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"
            }
          />
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => navigate("/orders")}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            My Orders
          </button>

          <button
            onClick={() => navigate("/change-password")}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Change Password
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Close
          </button>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="text-right max-w-[220px] truncate">{value || "N/A"}</span>
  </div>
);

export default ProfileModal;
