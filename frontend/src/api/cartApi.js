import privateApi from "./privateApi";

export const addToCartItem = (medicineId, quantity = 1) =>
  privateApi.post("/api/cart/add", null, {
    params: { medicineId, quantity },
  });

export const getCartItems = () => privateApi.get("/api/cart/cartdata");

export const updateCartQuantity = (cartId, quantity) =>
  privateApi.put(`/api/cart/update/${cartId}`, null, {
    params: { quantity },
  });

export const removeCartItem = (cartId) =>
  privateApi.delete(`/api/cart/remove/${cartId}`);

export const clearCartItem = () => privateApi.delete("/api/cart/clear");
