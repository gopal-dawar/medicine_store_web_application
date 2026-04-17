import privateApi from "./privateApi";

export const saveAddress = (id, address) =>
  privateApi.post(`/adrress/${id}`, address);
