import instance from "../instance";
import { CREATE_OFFER, ALL_OFFER, FETCH_OFFER } from "../api_path";
// Thunk for the login request
export const createOffer = async (payload) => {
  return await instance.post(CREATE_OFFER, payload);
};

export const getAllOffer = async () => {
  return await instance.get(ALL_OFFER);
};

export const getOffer = async (id) => {
  return await instance.get(`${FETCH_OFFER}/${id}`);
};
