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
