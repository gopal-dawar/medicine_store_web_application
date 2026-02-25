import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../components/SuccessPopup";
import { loginUser } from "../service/authService";
import { setAuth } from "../utils/tokenService";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showLoginSuccessPopup, setShowLoginSuccessPopup] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const re = await loginUser(userInfo);
      setAuth(re.data.token, re.data.role);

      setSuccessMsg("Login successful 🎉");
      setUserInfo({ username: "", password: "" });
      setShowLoginSuccessPopup(true);

      setTimeout(() => {
        setShowLoginSuccessPopup(false);
        navigate(re.data.role === "ADMIN" ? "/dashboard" : "/home", {
          replace: true,
        });
      }, 2000);
    } catch (error) {
      setErrorMsg("Invalid username or password");
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
            {successMsg || "Login to manage medicines"}
          </p>
          {errorMsg && (
            <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Username
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Enter username"
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
                👤
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
                placeholder="Enter password"
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

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-slate-500" />
              Remember me
            </label>
            <span className="hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-slate-700 text-slate-100 py-2 rounded
                       font-semibold hover:bg-slate-600 transition"
          >
            Login
          </button>
        </form>

        <SuccessPopup show={showLoginSuccessPopup} />

        {/* Footer */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Don’t have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-slate-200 font-semibold cursor-pointer ml-1 hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;