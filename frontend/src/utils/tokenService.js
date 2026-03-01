export const setAuth = (token, role) => {
  sessionStorage.setItem("authToken", token);
  sessionStorage.setItem("role", role);
};

export const getToken = () => sessionStorage.getItem("authToken");
export const getRole = () => sessionStorage.getItem("role");

export const logout = () => {
  sessionStorage.clear();
};
