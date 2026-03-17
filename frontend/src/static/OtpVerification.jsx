import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setAuth } from "../utils/tokenService";
import { verifyOtp, sendOtp } from "../service/authService";

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOtp = async () => {
    try {
      await sendOtp(email);

      setSuccessMsg("OTP resent successfully 📩");
      setErrorMsg("");
      setTimer(30);
      setCanResend(false);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          setErrorMsg("Invalid email address");
        } else if (err.response.status === 404) {
          setErrorMsg("User not found");
        } else if (err.response.status === 500) {
          setErrorMsg("Server error, try again later");
        } else {
          setErrorMsg("Failed to resend OTP");
        }
      } else if (err.request) {
        setErrorMsg("Please check your internet connection 🌐");
      } else {
        setErrorMsg("Something went wrong");
      }
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await verifyOtp({ email, otp });

      setAuth(res.data.role);

      setSuccessMsg("Login successful 🎉");

      setTimeout(() => {
        navigate(res.data.role === "ADMIN" ? "/dashboard" : "/home");
      }, 1000);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          setErrorMsg("Invalid OTP");
        } else if (err.response.status === 410) {
          setErrorMsg("OTP expired");
        } else if (err.response.status === 404) {
          setErrorMsg("User not found");
        } else if (err.response.status === 500) {
          setErrorMsg("Server error, please try again later");
        } else {
          setErrorMsg("Verification failed");
        }
      } else if (err.request) {
        setErrorMsg("Please check your internet connection 🌐");
      } else {
        setErrorMsg("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-100">Verify OTP</h1>
          <p className="text-slate-400 mt-1">Enter OTP sent to {email}</p>

          {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
          {successMsg && (
            <p className="text-green-500 text-sm mt-2">{successMsg}</p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleVerifyOtp} className="space-y-5">
          {/* Email with icon */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                value={email || ""}
                readOnly
                className="w-full bg-slate-900 text-slate-400 px-4 py-2 pl-10
                           border border-slate-700 rounded cursor-not-allowed"
              />
              <span className="absolute left-3 top-2.5 text-slate-400">📧</span>
            </div>
          </div>

          {/* OTP with icon */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              OTP
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-slate-900 text-slate-200 px-4 py-2 pl-10
                           border border-slate-700 rounded"
                required
              />
              <span className="absolute left-3 top-2.5 text-slate-400">🔑</span>
            </div>
          </div>

          {/* Resend OTP */}
          <div className="flex justify-between items-center text-sm text-slate-400">
            {canResend ? (
              <span
                onClick={handleResendOtp}
                className="cursor-pointer hover:underline text-slate-200"
              >
                Resend OTP
              </span>
            ) : (
              <span>Resend in {timer}s</span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-2 rounded
                       font-semibold hover:bg-slate-600 transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
