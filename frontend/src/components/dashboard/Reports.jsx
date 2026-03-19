import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../api/ordersApi";
// import { countExpireMedicine, countMedStock } from "../../api/medicineApi";

const Reports = ({ place }) => {
  const navigate = useNavigate();
  const [totalOrder, setTotalOrder] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [processingOrders, setProcessingOrders] = useState(0);
  const [deliveredOrders, setDeliveredOrders] = useState(0);
  const [cancelledOrders, setCancelledOrders] = useState(0);
  const [lowStock, setLowStock] = useState([]);
  const [expire, setExpire] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const re = await getAllOrders();
      const data = re.data;
      setTotalOrder(data.length);

      setPendingOrders(
        data.filter((order) => order.status === "PENDING").length,
      );

      setProcessingOrders(
        data.filter((order) => order.status === "PROCESSING").length,
      );

      setDeliveredOrders(
        data.filter((order) => order.status === "DELIVERED").length,
      );

      setCancelledOrders(
        data.filter((order) => order.status === "CANCELLED").length,
      );

      // const re2 = await countMedStock();
      // setLowStock(re2.data.data);

      // const re3 = await countExpireMedicine();
      // setExpire(re3.data.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="p-6 bg-slate-900 min-h-screen text-slate-200 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">📊 Reports</h2>

        {place && (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2
                       border border-slate-600 rounded-md
                       bg-slate-700 text-sm font-medium
                       hover:bg-slate-600 transition"
          >
            ⬅ Back
          </button>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-5 rounded-lg">
          <p className="text-slate-400 text-sm">Total Orders</p>
          <h3 className="text-2xl font-bold mt-1">{totalOrder}</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-lg">
          <p className="text-slate-400 text-sm">Total Revenue</p>
          <h3 className="text-2xl font-bold mt-1">₹12,540</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-lg">
          <p className="text-slate-400 text-sm">Medicines Sold</p>
          <h3 className="text-2xl font-bold mt-1">120</h3>
        </div>

        <div className="bg-slate-800 p-5 rounded-lg">
          <p className="text-slate-400 text-sm">Average Order Value</p>
          <h3 className="text-2xl font-bold mt-1">₹330</h3>
        </div>
      </div>

      {/* Order Status Breakdown */}
      <div className="bg-slate-800 p-5 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Order Status Report</h3>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-700 p-4 rounded">
            <p className="text-sm text-slate-400">Pending</p>
            <h4 className="text-xl font-bold">{pendingOrders}</h4>
          </div>

          <div className="bg-slate-700 p-4 rounded">
            <p className="text-sm text-slate-400">Processing</p>
            <h4 className="text-xl font-bold">{processingOrders}</h4>
          </div>

          <div className="bg-slate-700 p-4 rounded">
            <p className="text-sm text-slate-400">Delivered</p>
            <h4 className="text-xl font-bold">{deliveredOrders}</h4>
          </div>

          <div className="bg-slate-700 p-4 rounded">
            <p className="text-sm text-slate-400">Cancelled</p>
            <h4 className="text-xl font-bold">{cancelledOrders}</h4>
          </div>
        </div>
      </div>

      {/* Top Selling Medicines */}
      <div className="bg-slate-800 p-5 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Top Selling Medicines</h3>

        <div className="divide-y divide-slate-700">
          <div className="flex justify-between py-2">
            <span>Paracetamol 500mg</span>
            <span className="text-slate-400">40 sold</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Ibuprofen 400mg</span>
            <span className="text-slate-400">30 sold</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Diclofenac</span>
            <span className="text-slate-400">20 sold</span>
          </div>
        </div>
      </div>

      {/* Low Stock Medicines */}
      <div className="bg-slate-800 p-5 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-yellow-400">
          ⚠ Low Stock Medicines
        </h3>

        <div className="divide-y divide-slate-700">
          {lowStock.map((data) => {
            return (
              <div key={data.id}>
                <div className="flex justify-between  py-2">
                  <span>{data.name}</span>
                  <span>{data.stock} left</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expired Medicines */}
      <div className="bg-slate-800 p-5 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-red-400">
          ⛔ Expired Medicines
        </h3>

        <div className="divide-y divide-slate-700">
          {expire.map((data) => {
            return (
              <div key={data.id} className="flex justify-between py-2">
                <span>{data.name}</span>
                <span>
                  Expired:{" "}
                  {new Date(data.expiryDate).toLocaleDateString("en-GB")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reports;
