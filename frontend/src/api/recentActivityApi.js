import publicApi from "./publicApi";

// Activity endpoints are publicly accessible (no authentication required)
export const addActivity = (activity) => {
  return publicApi.post("/api/activity", activity);
};

export const recentActivity = () => {
  return publicApi.get("/api/activity/recent");
};

export const getActivityByType = (type) => {
  return publicApi.get(`/api/activity/type/${type}`);
};
