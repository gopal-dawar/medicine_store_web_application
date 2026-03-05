import React, { use, useEffect, useState } from "react";
import { recentActivity } from "../../../api/RecentActivity";

const RecentActivity = () => {
  const [newAdded, setNewAdded] = useState([]);
  const [newUpdated, setNewUpdated] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [expired, setExpired] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const re1 = await recentActivity("ADDED");
      setNewAdded(re1.data.slice(0, 3));

      const re2 = await recentActivity("UPDATED");
      setNewUpdated(re2.data.slice(0, 3));

      const re3 = await recentActivity("LOW_STOCK");
      setLowStock(re3.data.slice(0, 3));

      const re4 = await recentActivity("EXPIRED");
      setExpired(re4.data.slice(0, 3));
    };
    fetchdata();
  }, []);

  return (
    <div className="bg-slate-800 rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4 text-slate-100">
        🕒 Recent Activity
      </h3>

      <ul className="space-y-4 text-sm text-slate-300">
        <li className="border-l-4 border-blue-500 pl-3">
          Added new medicine{" "}
          <b className="text-slate-100">
            <table className="w-full text-sm">
              <thead className="text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="text-left py-2">Sr. No. </th>
                  <th className="text-left py-2">Medicine</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-700">
                {newAdded.map((med, idx) => {
                  return (
                    <tr key={med.id} className="hover:bg-slate-700 transition">
                      <td className="py-3 font-medium  text-slate-100">
                        {idx + 1}
                      </td>
                      <td className="py-3 font-medium text-slate-100">
                        {med.medicines.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </b>
        </li>
        <li className="border-l-4 border-green-500 pl-3">
          Updated medicine{" "}
          <b className="text-slate-100">
            <table className="w-full text-sm">
              <thead className="text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="text-left py-2">Sr. No. </th>
                  <th className="text-left py-2">Medicine</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-700">
                {newUpdated.map((med, idx) => {
                  return (
                    <tr key={med.id} className="hover:bg-slate-700 transition">
                      <td className="py-3 font-medium  text-slate-100">
                        {idx + 1}
                      </td>
                      <td className="py-3 font-medium text-slate-100">
                        {med.medicines.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </b>
        </li>

        <li className="border-l-4 border-yellow-500 pl-3">
          Stock low for{" "}
          <b className="text-slate-100">
            <table className="w-full text-sm">
              <thead className="text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="text-left py-2">Sr. No. </th>
                  <th className="text-left py-2">Medicine</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-700">
                {lowStock.map((med, idx) => {
                  return (
                    <tr key={med.id} className="hover:bg-slate-700 transition">
                      <td className="py-3 font-medium  text-slate-100">
                        {idx + 1}
                      </td>
                      <td className="py-3 font-medium text-slate-100">
                        {med.medicines.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </b>
        </li>

        <li className="border-l-4 border-red-500 pl-3">
          Removed expired{" "}
          <b className="text-slate-100">
            <table className="w-full text-sm">
              <thead className="text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="text-left py-2">Sr. No. </th>
                  <th className="text-left py-2">Medicine</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-700">
                {expired.map((med, idx) => {
                  return (
                    <tr key={med.id} className="hover:bg-slate-700 transition">
                      <td className="py-3 font-medium  text-slate-100">
                        {idx + 1}
                      </td>
                      <td className="py-3 font-medium text-slate-100">
                        {med.medicines.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </b>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;
