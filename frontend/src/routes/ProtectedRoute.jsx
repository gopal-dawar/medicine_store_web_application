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

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = sessionStorage.getItem("authToken");

  if (!token || !isTokenValid(token)) {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("role");
    return <Navigate to="/login" replace />;
  }

  const decoded = jwtDecode(token);
  const userRole = decoded.role || sessionStorage.getItem("role");

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
