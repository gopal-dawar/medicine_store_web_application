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
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await getOrdersByUser();
      setOrders(res.data || []);
    } catch (err) {
      console.error("Fetch Orders Error:", err);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const placeOrder = async (deliveryAddress) => {
    try {
      setLoading(true);
      const res = await checkout(deliveryAddress);
      await fetchOrders();
      return res.data;
    } catch (err) {
      console.error("Checkout Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateOrder = async (id, data) => {
    try {
      setLoading(true);
      await updateorder(id, data);
      fetchOrders();
    } catch (err) {
      console.error("Update Order Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderById = async (orderCode) => {
    try {
      setLoading(true);
      const res = await getOrderById(orderCode);
      setSingleOrder(res.data);
    } catch (err) {
      console.error("Get Order Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllOrders = async () => {
    try {
      setLoading(true);
      const res = await getAllOrders();
      setOrders(res.data || []);
    } catch (err) {
      console.error("Get All Orders Error:", err);
    } finally {
      setLoading(false);
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
        loading,
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
