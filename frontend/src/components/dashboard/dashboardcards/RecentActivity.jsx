import React, { useContext, useEffect, useState } from "react";
import { ActivityContext } from "../../../context/ActivityContext";

const RecentActivity = () => {
  const { activities } = useContext(ActivityContext);

  const [newAdded, setNewAdded] = useState([]);
  const [newUpdated, setNewUpdated] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [expired, setExpired] = useState([]);

  console.log(activities);

  useEffect(() => {
    const fetchData = async () => {
      if (!activities) return;

      const added = activities.filter((act) => act.type === "ADDED");
      const updated = activities.filter((act) => act.type === "UPDATED");
      const low = activities.filter((act) => act.type === "LOW_STOCK");
      const exp = activities.filter((act) => act.type === "EXPIRED");

      const sortByDate = (arr) =>
        arr.sort(
          (a, b) => new Date(b.activityDateTime) - new Date(a.activityDateTime),
        );

      setNewAdded(sortByDate(added).slice(0, 5));
      setNewUpdated(sortByDate(updated).slice(0, 5));
      setLowStock(sortByDate(low).slice(0, 5));
      setExpired(sortByDate(exp).slice(0, 5));
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-800 rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4 text-slate-100">
        🕒 Recent Activity
      </h3>

      <ul className="space-y-4 text-sm text-slate-300">
        <li className="border-l-4 border-blue-500 pl-3">
          Added new medicine
          <table className="w-full text-sm mt-2">
            <tbody>
              {newAdded.map((med, idx) => (
                <tr key={med.id}>
                  <td>{idx + 1}</td>
                  <td>{med.medicines?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </li>

        <li className="border-l-4 border-green-500 pl-3">
          Updated medicine
          <table className="w-full text-sm mt-2">
            <tbody>
              {newUpdated.map((med, idx) => (
                <tr key={med.id}>
                  <td>{idx + 1}</td>
                  <td>{med.medicines?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </li>

        <li className="border-l-4 border-yellow-500 pl-3">
          Stock low
          <table className="w-full text-sm mt-2">
            <tbody>
              {lowStock.map((med, idx) => (
                <tr key={med.id}>
                  <td>{idx + 1}</td>
                  <td>{med.medicines?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </li>

        {/* EXPIRED */}
        <li className="border-l-4 border-red-500 pl-3">
          Removed expired
          <table className="w-full text-sm mt-2">
            <tbody>
              {expired.map((med, idx) => (
                <tr key={med.id}>
                  <td>{idx + 1}</td>
                  <td>{med.medicines?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;
