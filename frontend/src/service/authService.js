import publicApi from "../api/publicApi";

export const loginUser = (data) => {
  return publicApi.post("/api/auth/login", data);
};

export const registerUser = (data) => {
  return publicApi.post("/api/register", data);
};

export const verifyOtp = (data) => {
  return publicApi.post("/api/auth/verify-otp", data);
};

export const sendOtp = (email) => {
  return publicApi.post("/api/otp", email);
};

export const logoutUser = () => {
  return publicApi.post("/api/auth/logout");
};
