import privateApi from "./privateApi";

export const addActivity = (activity) => {
  return privateApi.post("/recentactivity", activity);
};

export const recentActivity = (type) => {
  return privateApi.get(`/recentactivity/${type}`);
};
  