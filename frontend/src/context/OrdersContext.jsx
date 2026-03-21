import { createContext, useEffect, useState } from "react";
import {
  checkout,
  updateorder,
  getOrdersByUser,
  getOrderById,
  getAllOrders,
} from "../api/ordersApi";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [singleOrder, setSingleOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await getOrdersByUser();
      setOrders(res.data || []);
    } catch (err) {
      console.error("Fetch Orders Error:", err);
      setOrders([]);
    }
  };

  const placeOrder = async (deliveryAddress) => {
    try {
      const res = await checkout(deliveryAddress);
      await fetchOrders();
      return res.data;
    } catch (err) {
      console.error("Checkout Error:", err);
    }
  };

  const updateOrder = async (id, data) => {
    try {
      await updateorder(id, data);
      fetchOrders();
    } catch (err) {
      console.error("Update Order Error:", err);
    }
  };

  const fetchOrderById = async (orderCode) => {
    try {
      const res = await getOrderById(orderCode);
      setSingleOrder(res.data);
    } catch (err) {
      console.error("Get Order Error:", err);
    }
  };

  const fetchAllOrders = async () => {
    try {
      const res = await getAllOrders();
      setOrders(res.data || []);
    } catch (err) {
      console.error("Get All Orders Error:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrdersContext.Provider
      value={{
        orders,
        singleOrder,
        fetchOrders,
        placeOrder,
        updateOrder,
        fetchOrderById,
        fetchAllOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
