import privateApi from "./privateApi";

export const checkout = (deliveryAddress) => {
  return privateApi.post(`/api/orders/checkout`, null, {
    params: { deliveryAddress },
  });
};

// update orders
export const updateorder = (id, orders) => {
  return privateApi.put(`/api/orders/updateorder/${id}`, orders);
};

// get order by user
export const getOrdersByUser = () => {
  return privateApi.get(`/api/orders/myorders`);
};

// get order by id
export const getOrderById = (orderCode) => {
  return privateApi.get(`/api/orders/getorderbyid/${orderCode}`);
};

// get all order
export const getAllOrders = () => {
  return privateApi.get("/api/orders/allOrders");
};
