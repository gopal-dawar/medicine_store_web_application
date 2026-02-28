import privateApi from "./privateApi";

export const addToCartItem = (medicineId, quantity = 1) =>
  privateApi.post("/cart/add", null, {
    params: { medicineId, quantity },
  });

export const getCartItems = () => privateApi.get("/cart/cartdata");

export const updateCartQuantity = (cartId, quantity) =>
  privateApi.put(`/cart/update/${cartId}?quantity=${quantity}`);

export const removeCartItem = (cartId) =>
  privateApi.delete(`/cart/remove/${cartId}`);

export const cartItemCounts = () => privateApi.get("/cart/count");
