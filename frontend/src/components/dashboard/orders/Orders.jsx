import React, { useEffect, useState } from "react";
import {
  getAllOrders,
  getCanelledOrderCount,
  getDeliveredOrderCount,
  getOrderCount,
  getPendingOrderCount,
} from "../../../api/ordersApi";
import OrdersList from "./OrdersList";
import { Outlet, useMatch } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [ordercount, setOrdercount] = useState(0);
  const [orderPendingCount, setOrderPendingCount] = useState(0);
  const [orderDelivered, setOrderDelivered] = useState(0);
  const [orderCancelled, setOrderCancelled] = useState(0);
  const [filterType, setFilterType] = useState("ALL");
  const isViewOrder = useMatch("/dashboard/orders/:id");

  useEffect(() => {
    const fetchdata = async () => {
      const re1 = await getAllOrders();
      setOrders(re1.data);

      const re2 = await getOrderCount();
      setOrdercount(re2.data);

      const re3 = await getPendingOrderCount();
      setOrderPendingCount(re3.data);

      const re4 = await getDeliveredOrderCount();
      setOrderDelivered(re4.data);

      const re5 = await getCanelledOrderCount();
      setOrderCancelled(re5.data);
    };
    fetchdata();
  }, []);

  const filteredOrders = orders.filter((order) => {
    if (filterType === "ALL") return true;
    if (filterType === "PENDING") return order.status === "PENDING";
    if (filterType === "DELIVERED") return order.status === "DELIVERED";
    if (filterType === "CANCELLED") return order.status === "CANCELLED";
    return true;
  });

  return (
    <main className="p-6 space-y-6 bg-slate-900 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-100">📦 Orders</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          onClick={() => setFilterType("ALL")}
          className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600
             cursor-pointer hover:bg-slate-700 transition"
        >
          <p className="text-slate-400 text-sm">Total Orders</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">
            {ordercount}
          </h3>
        </div>

        <div
          onClick={() => setFilterType("PENDING")}
          className="bg-slate-800 cursor-pointer p-5 rounded-xl shadow border-l-4 border-slate-600"
        >
          <p className="text-slate-400 text-sm">Pending</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">
            {orderPendingCount}
          </h3>
        </div>

        <div
          onClick={() => setFilterType("DELIVERED")}
          className="bg-slate-800 cursor-pointer p-5 rounded-xl shadow border-l-4 border-slate-600"
        >
          <p className="text-slate-400 text-sm">Delivered</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">
            {orderDelivered}
          </h3>
        </div>

        <div
          onClick={() => setFilterType("CANCELLED")}
          className="bg-slate-800 cursor-pointer p-5 rounded-xl shadow border-l-4 border-slate-600"
        >
          <p className="text-slate-400 text-sm">Cancelled</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-100">
            {orderCancelled}
          </h3>
        </div>
      </div>

      <div className="bg-slate-800 p-4 rounded-xl shadow flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by Order ID"
          className="bg-slate-900 border border-slate-700 text-slate-200
                     placeholder:text-slate-500
                     px-4 py-2 rounded w-60
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        />

        <select
          className="bg-slate-900 border border-slate-700 text-slate-200
                     px-4 py-2 rounded
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          <option>All Status</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <input
          type="date"
          className="bg-slate-900 border border-slate-700 text-slate-200
                     px-4 py-2 rounded
                     focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      {!isViewOrder && <OrdersList orders={filteredOrders} />}

      <Outlet />
    </main>
  );
};

export default Orders;
