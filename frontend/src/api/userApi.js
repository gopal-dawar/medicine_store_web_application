import privateApi from "./privateApi";
import publicApi from "./publicApi";

export const getCurrentUser = () => {
  return privateApi.get("/me");
};

export const verifyOtp = async (data) => {
  const res = await publicApi.post("/auth/verify-otp", data);
  return res.data;
};

export const sendOtp = async (email) => {
  const res = await publicApi.post("/auth/send-otp", { email });
  return res.data;
};
