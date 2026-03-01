export const setAuth = (token, role) => {
  sessionStorage.setItem("authToken", token);
  sessionStorage.setItem("role", role);
};

export const getToken = () => {
  return sessionStorage.getItem("authToken");
};

export const getRole = () => {
  return sessionStorage.getItem("role");
};

export const clearAuth = () => {
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("role");
};
