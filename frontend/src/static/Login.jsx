import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../components/SuccessPopup";

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
      const re = await axios.post(
        "http://localhost:8080/auth/login",
        userInfo,
        {
          withCredentials: true,
        },
      );

      console.log(re.data);
      localStorage.setItem("authToken", re.data.token);

      setSuccessMsg("Login successful 🎉");

      setUserInfo({
        username: "",
        password: "",
      });
      setShowLoginSuccessPopup(true);
      setTimeout(() => {
        setShowLoginSuccessPopup(false);
        navigate("/home", { replace: true });
      }, 2000);
    } catch (error) {
      setErrorMsg("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">Medicine Store</h1>
          <p className="text-gray-500 mt-1">
            {successMsg || "Login to manage medicines"}
          </p>
          {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Enter username"
                value={userInfo.username}
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    username: e.target.value,
                  })
                }
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <span className="absolute left-3 top-2.5 text-gray-400">👤</span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    password: e.target.value,
                  })
                }
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm text-green-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-600" />
              Remember me
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <SuccessPopup show={showLoginSuccessPopup} />
        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-green-600 font-semibold cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
