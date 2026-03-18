import privateApi from "./privateApi";

export const checkout = (deliveryAddress) => {
  return privateApi.post(`/orders/checkout`, null, {
    params: { deliveryAddress },
  });
};

// update orders
export const updateorder = (id, orders) => {
  return privateApi.put(`/orders/updateorder/${id}`, orders);
};

// get order by user
export const getOrdersByUser = () => {
  return privateApi.get(`/orders/myorders`);
};

// get order by id
export const getOrderById = (orderCode) => {
  return privateApi.get(`/orders/getorderbyid/${orderCode}`);
};

// get all order
export const getAllOrders = () => {
  return privateApi.get("/orders/allOrders");
};
