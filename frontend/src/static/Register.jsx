import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../service/authService";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    if (userInfo.password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    try {
      await registerUser(userInfo);
      setSuccessMsg("Registration successful 🎉");

      setUserInfo({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });
      setConfirmPassword("");

      navigate("/login");
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-100">
            Medicine Store
          </h1>
          <p className="text-slate-400 mt-1">
            {successMsg || "Create your account"}
          </p>
          {errorMsg && (
            <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
          )}
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Enter full name"
                value={userInfo.fullName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, fullName: e.target.value })
                }
                className="w-full bg-slate-900 text-slate-200 px-4 py-2 pl-10
                           border border-slate-700 rounded
                           focus:ring-2 focus:ring-slate-600 focus:outline-none"
                required
              />
              <span className="absolute left-3 top-2.5 text-slate-400">
                👤
              </span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                placeholder="Enter email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                className="w-full bg-slate-900 text-slate-200 px-4 py-2 pl-10
                           border border-slate-700 rounded
                           focus:ring-2 focus:ring-slate-600 focus:outline-none"
                required
              />
              <span className="absolute left-3 top-2.5 text-slate-400">
                📧
              </span>
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Username
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Choose username"
                value={userInfo.username}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, username: e.target.value })
                }
                className="w-full bg-slate-900 text-slate-200 px-4 py-2 pl-10
                           border border-slate-700 rounded
                           focus:ring-2 focus:ring-slate-600 focus:outline-none"
                required
              />
              <span className="absolute left-3 top-2.5 text-slate-400">
                🆔
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                className="w-full bg-slate-900 text-slate-200 px-4 py-2 pl-10
                           border border-slate-700 rounded
                           focus:ring-2 focus:ring-slate-600 focus:outline-none"
                required
              />
              <span className="absolute left-3 top-2.5 text-slate-400">
                🔒
              </span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm text-slate-400 hover:text-slate-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-slate-900 text-slate-200 px-4 py-2 pl-10
                           border border-slate-700 rounded
                           focus:ring-2 focus:ring-slate-600 focus:outline-none"
                required
              />
              <span className="absolute left-3 top-2.5 text-slate-400">
                🔒
              </span>
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-2.5 text-sm text-slate-400 hover:text-slate-200"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-slate-700 text-slate-100 py-2 rounded
                       font-semibold hover:bg-slate-600 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?
          <span
            onClick={() => navigate(-1)}
            className="text-slate-200 font-semibold cursor-pointer ml-1 hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;