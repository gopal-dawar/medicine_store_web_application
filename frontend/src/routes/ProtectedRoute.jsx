import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (!token || !isTokenValid(token)) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
