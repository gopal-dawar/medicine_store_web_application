import publicApi from '../api/publicApi'

export const loginUser = (data) => {
  return publicApi.post("/auth/login", data);
};

export const registerUser = (data) => {
  return publicApi.post("/register", data);
};
