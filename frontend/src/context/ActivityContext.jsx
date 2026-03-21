import { createContext, useEffect, useState } from "react";
import { addActivity, recentActivity } from "../api/recentActivityApi";

export const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    try {
      const data = await recentActivity();
      setActivities(data);
    } catch (err) {
      console.error("Error fetching activities:", err);
    }
  };

  const createActivity = async (activity) => {
    try {
      const data = await addActivity(activity);

      setActivities((prev) => [data, ...prev]);

      return data;
    } catch (err) {
      console.error("Error creating activity:", err);
      return null;
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <ActivityContext.Provider
      value={{
        activities,
        createActivity,
        refreshActivities: getActivities,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityProvider;
