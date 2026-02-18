import axios from "axios";
import { getToken } from "../utils/tokenService";

const privateApi = axios.create({
  baseURL: "http://localhost:8080",
});

privateApi.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default privateApi;
