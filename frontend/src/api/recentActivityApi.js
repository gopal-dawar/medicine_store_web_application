import privateApi from "./privateApi";

export const addActivity = (activity) => {
  return privateApi.post("/activity", activity);
};

export const recentActivity = () => {
  return privateApi.get("/activity/recent");
};

export const getActivityByType = (type) => {
  return privateApi.get(`/activity/type/${type}`);
};
