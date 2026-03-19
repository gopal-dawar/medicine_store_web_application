import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../service/authService";
import { FiEdit, FiMapPin, FiSettings, FiLock } from "react-icons/fi";

import { MdOutlineShoppingBag } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

const ProfileModal = ({ show, onClose, user }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleLogout = async () => {
    try {
      await logoutUser();
      sessionStorage.clear();
      onClose();
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <div
      className="fixed inset-0 z-55 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-gray-100 rounded-xl shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex  justify-center items-center gap-6">
          <div className="bg-white rounded-xl w-2/3  shadow p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
              {user?.name?.charAt(0) || "U"}
            </div>

            <h2 className="mt-4 text-lg font-semibold">{user?.name}</h2>

            <p className="text-gray-500 text-sm">{user?.email}</p>

            <div className="my-5 border-t"></div>

            <div className="mt-4 text-sm space-y-1">
              <Option
                label="Edit Profile"
                icon={<FiEdit />}
                onClick={() => navigate("/profile/edit")}
              />

              <Option
                label="My Orders"
                icon={<MdOutlineShoppingBag />}
                onClick={() => {
                  onClose();
                  navigate("/home/myorders");
                }}
              />

              <Option
                label="Addresses"
                icon={<FiMapPin />}
                onClick={() => navigate("/addresses")}
              />

              <Option
                label="Prescriptions"
                icon={<GiMedicines />}
                onClick={() => navigate("/prescriptions")}
              />

              <Option
                label="Settings"
                icon={<FiSettings />}
                onClick={() => navigate("/settings")}
              />

              <Option
                label="Change Password"
                icon={<FiLock />}
                onClick={() => navigate("/change-password")}
              />
            </div>

            <div className="my-5 border-t"></div>

            <button
              onClick={handleLogout}
              className="w-full py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <div className="col-span-2 w-full space-y-4">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-semibold mb-4">Profile Details</h3>

              <div className="flex flex-col gap-4 text-sm">
                <InfoRow label="Full Name" value={user?.name} />
                <InfoRow label="Email" value={user?.email} />
                <InfoRow label="Phone" value={user?.phone} />
                <InfoRow label="Address" value={user?.address} />
                <InfoRow
                  label="Member Since"
                  value={
                    user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "N/A"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div
    className="flex flex-col bg-gradient-to-r from-gray-50 to-white 
                  p-4 rounded-xl shadow-sm hover:shadow-md transition"
  >
    <span className="text-xs text-gray-400 uppercase tracking-wide">
      {label}
    </span>

    <span className="text-base font-semibold text-gray-800 mt-1">
      {value || "N/A"}
    </span>
  </div>
);
const Option = ({ label, icon, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-2 rounded-lg 
               cursor-pointer text-gray-700
               hover:bg-blue-50 hover:text-blue-600 
               transition group"
  >
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{label}</span>
  </div>
);

export default ProfileModal;
