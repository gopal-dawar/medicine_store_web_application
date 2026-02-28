import privateApi from "./privateApi";

export const checkout = (userId, deliveryAddress) => {
  return privateApi.post(`/orders/checkout/${userId}`, null, {
    params: { deliveryAddress },
  });
};

export const getOrdersByUser = (userId) => {
  return privateApi.get(`/orders/user/${userId}`);
};

export const getOrderById = (orderId) => {
  return privateApi.get(`/orders/${orderId}`);
};

export const getAllOrders = () => {
  return privateApi.get("/orders/allOrders");
};

export const getOrderCount = () => {
  return privateApi.get("/orders/orderCount");
};

export const getPendingOrderCount = () => {
  return privateApi.get("/orders/pendingordercount");
};

export const getDeliveredOrderCount = () => {
  return privateApi.get("/orders/deliveredOrder");
};

export const getCanelledOrderCount = () => {
  return privateApi.get("/orders/cancelledOrder");
};
