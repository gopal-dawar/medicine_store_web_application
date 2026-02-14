import axios from "axios";

// 🔹 Register API
export const registerUser = async (userData) => {
  const response = await axios.post("/auth/register", userData);
  return response.data;
};

// 🔹 Login API
export const loginUser = async (loginData) => {
  const response = await axios.post("/auth/login", loginData);
  return response.data;
};
