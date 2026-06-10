import privateApi from "./privateApi";

// Save Address
export const saveAddress = (userId, address) =>
  privateApi.post(`/api/address/${userId}`, address);

// Get All Addresses of User
export const getAddressesByUser = (userId) =>
  privateApi.get(`/api/address/user/${userId}`);

// Get Address By Id
export const getAddressById = (addressId) =>
  privateApi.get(`/api/address/${addressId}`);

// Update Address
export const updateAddress = (addressId, address) =>
  privateApi.put(`/api/address/${addressId}`, address);

// Delete Address
export const deleteAddress = (addressId) =>
  privateApi.delete(`/api/address/${addressId}`);

// Get Default Address
export const getDefaultAddress = (userId) =>
  privateApi.get(`/api/address/default/${userId}`);

// Set Default Address
export const setDefaultAddress = (userId, addressId) =>
  privateApi.put(`/api/address/default/${userId}/${addressId}`);
