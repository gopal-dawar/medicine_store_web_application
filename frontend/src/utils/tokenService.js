export const setAuth = (token, role) => {
  localStorage.setItem("authToken", token);
  localStorage.setItem("role", role);
};

export const getToken = () => localStorage.getItem("authToken");
export const getRole = () => localStorage.getItem("role");

export const logout = () => {
  localStorage.clear();
};
