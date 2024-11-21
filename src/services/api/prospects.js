import instance from "../instance";
import {
  CREATE_PROSPECT,
  FETCH_ALL_PROSPECTS,
  FETCH_OFFER,
  FETCH_PROSPECTS,
} from "../api_path";
// Thunk for the login request
export const createProspect = async (payload) => {
  return await instance.post(CREATE_PROSPECT, payload);
};

export const getAllProspects = async () => {
  return await instance.get(FETCH_ALL_PROSPECTS);
};

export const getProspect = async (id) => {
  return await instance.get(`${FETCH_PROSPECTS}/${id}`);
};
