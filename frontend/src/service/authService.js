import publicApi from "../api/publicApi";

export const loginUser = (data) => {
  return publicApi.post("/auth/login", data);
};

export const registerUser = (data) => {
  return publicApi.post("/register", data);
};

export const verifyOtp = (data) => {
  return publicApi.post("/auth/verify-otp", data);
};

export const sendOtp = (email) => {
  return publicApi.post("/otp", email);
};

export const logoutUser = () => {
  return publicApi.post("/auth/logout");
};
