import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../service/authService";

const ProfileModal = ({ show, onClose, user }) => {
  const navigate = useNavigate();

  if (!show) return null; // ✅ modal control

  const handleLogout = async () => {
    try {
      await logoutUser();
      sessionStorage.clear();
      onClose(); // close modal
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose} // ✅ click outside close
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()} // ✅ prevent close on inside click
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-semibold text-blue-600">
            {user?.name?.charAt(0) || "U"}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.name || "Customer Name"}
            </h2>
            <p className="text-gray-500">{user?.role || "USER"}</p>
          </div>
        </div>

        <div className="my-5 border-t"></div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
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
        <div className="mt-6 flex gap-4 flex-wrap">
          <button
            onClick={() => {
              onClose();
              navigate("/home/myorders");
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            My Orders
          </button>

          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Change Password
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value || "N/A"}</span>
  </div>
);

export default ProfileModal;
