import instance from "../instance";
import { CREATE_EVENT, ALL_EVENT } from "../api_path";
// Thunk for the login request
export const createEvent = async (payload) => {
  return await instance.post(CREATE_EVENT, payload);
};

export const getAllEvent = async () => {
  return await instance.get(ALL_EVENT);
};
