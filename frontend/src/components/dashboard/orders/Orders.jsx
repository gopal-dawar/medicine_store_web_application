import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../../api/ordersApi";
import OrdersList from "./OrdersList";
import { Outlet, useMatch } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [ordercount, setOrdercount] = useState(0);
  const [orderPendingCount, setOrderPendingCount] = useState(0);
  const [orderDelivered, setOrderDelivered] = useState(0);
  const [orderCancelled, setOrderCancelled] = useState(0);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [bulkAction, setBulkAction] = useState("");
  const [selectMode, setSelectMode] = useState(false);
  const [filterType, setFilterType] = useState("ALL");
  const [search, setSearch] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  const isViewOrder = useMatch("/dashboard/orders/orders/vieworder/:id");
  const isUpdateOrder = useMatch("/dashboard/orders/orders/updateOrder/:id");

  // Fetch data once
  useEffect(() => {
    const fetchdata = async () => {
      const re1 = await getAllOrders();
      const data = re1.data;

      console.log(data.status);

      setOrders(data);

      setOrderPendingCount(
        data.filter((order) => order.status === "PENDING").length,
      );

      setOrderDelivered(
        data.filter((order) => order.status === "DELIVERED").length,
      );

      setOrderCancelled(
        data.filter((order) => order.status === "CANCELLED").length,
      );

      setOrdercount(re1.data.length);
    };

    fetchdata();
  }, []);

  useEffect(() => {
    let result = orders;

    if (search) {
      result = orders.filter((order) => {
        const orderCode = order.orderCode ? order.orderCode.toLowerCase() : "";
        const customer = order.customerName
          ? order.customerName.toLowerCase()
          : "";

        return (
          orderCode.includes(search.toLowerCase()) ||
          customer.includes(search.toLowerCase())
        );
      });
    }

    if (filterType !== "ALL") {
      result = result.filter((order) => order.status === filterType);
    }

    setFilteredOrders(result);
  }, [search, filterType, orders]);

  const handleBulkUpdate = () => {
    if (!bulkAction) {
      alert("Please select a bulk action");
      return;
    }

    if (selectedOrders.length === 0) {
      alert("Please select at least one order");
      return;
    }

    const updatedOrders = orders.map((order) => {
      if (selectedOrders.includes(order.id)) {
        return { ...order, status: bulkAction };
      }
      return order;
    });

    setOrders(updatedOrders);
    setSelectedOrders([]);
  };
  return (
    <main className="p-6 space-y-6 bg-slate-900 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-100">📦 Orders</h2>
      </div>

      {/* Order Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          onClick={() => setFilterType("ALL")}
          className="bg-slate-800 p-5 rounded-xl shadow border-l-4 border-slate-600 cursor-pointer hover:bg-slate-700"
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

      {/* Search + Filter */}
      <div className="bg-slate-800 p-4 rounded-xl shadow flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Search Order ID / Customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-900 border border-slate-700 text-slate-200
               placeholder:text-slate-500 px-4 py-2 rounded w-60
               focus:outline-none focus:ring-2 focus:ring-slate-600"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="bg-slate-900 border border-slate-700 text-slate-200
               px-4 py-2 rounded
               focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          <option value="ALL">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="PROCESSING">Processing</option>
          <option value="SHIPPED">Shipped</option>
          <option value="DELIVERED">Delivered</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
        <div>
          <button
            onClick={() => setSelectMode(!selectMode)}
            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded"
          >
            {selectMode ? "Cancel Select" : "Select Orders"}
          </button>
        </div>
        {/* Bulk Action */}
        <select
          value={bulkAction}
          onChange={(e) => setBulkAction(e.target.value)}
          className="bg-slate-900 border border-slate-700 text-slate-200
             px-4 py-2 rounded
             focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          <option value="">Bulk Action</option>
          <option value="PROCESSING">Mark as Processing</option>
          <option value="SHIPPED">Mark as Shipped</option>
          <option value="DELIVERED">Mark as Delivered</option>
          <option value="CANCELLED">Cancel Orders</option>
        </select>

        <button
          onClick={handleBulkUpdate}
          className=" bg-slate-700 text-slate-200 hover:bg-slate-600 px-4 py-2 rounded"
        >
          Apply
        </button>
      </div>

      {/* Orders Table */}
      {!(isViewOrder || isUpdateOrder) && (
        <OrdersList
          orders={filteredOrders}
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
          setSelectMode={setSelectMode}
          selectMode={selectMode}
        />
      )}

      <Outlet />
    </main>
  );
};

export default Orders;
