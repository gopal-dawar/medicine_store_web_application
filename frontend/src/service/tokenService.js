export const setAuth = (token, role) => {
  localStorage.setItem("authToken", token);
  localStorage.setItem("role", role);
};

export const getToken = () => {
  return localStorage.getItem("authToken");
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const clearAuth = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("role");
};
