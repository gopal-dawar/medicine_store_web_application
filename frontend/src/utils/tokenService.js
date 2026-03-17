import publicApi from "../api/publicApi";

export const setAuth = (role) => {
  sessionStorage.setItem("role", role);
};

export const getRole = () => sessionStorage.getItem("role");

export const logout = async () => {
  try {
    await publicApi.post("/auth/logout"); 
  } catch (err) {
    console.log("Logout failed");
  }

  sessionStorage.clear();
};
