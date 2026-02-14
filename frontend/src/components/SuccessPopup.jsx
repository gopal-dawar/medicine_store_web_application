import { useEffect } from "react";

export default function SuccessPopup({ show, onClose, duration = 2000 }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-6 w-80 text-center animate-popup">

        {/* Success Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl text-green-600">✔</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700">
          Login Successful
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-gray-600 text-sm">
          Welcome back! Redirecting...
        </p>
      </div>
    </div>
  );
}
