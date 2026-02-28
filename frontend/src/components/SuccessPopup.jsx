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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-6 w-80 text-center">

        {/* Success Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
          <span className="text-4xl text-emerald-400">✔</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-emerald-400">
          Login Successful
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-slate-400 text-sm">
          Welcome back! Redirecting...
        </p>
      </div>
    </div>
  );
}