import privateApi from "./privateApi";
import publicApi from "./publicApi";

export const getCurrentUser = () => {
  return privateApi.get("/api/me");
};

export const verifyOtp = async (data) => {
  const res = await publicApi.post("/api/auth/verify-otp", data);
  return res.data;
};

export const sendOtp = async (email) => {
  const res = await publicApi.post("/api/otp", { email });
  return res.data;
};
