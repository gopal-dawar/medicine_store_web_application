import privateApi from "./privateApi";

export const getCurrentUser = () => {
  return privateApi.get("/me");
};
