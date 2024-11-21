import instance from "../instance";
import { ALL_CONTRACTS, CREATE_CONTRACT, FETCH_CONTRACT } from "../api_path";

export const createContract = async (payload) => {
  return await instance.post(CREATE_CONTRACT, payload);
};

export const getAllContract = async () => {
  return await instance.get(ALL_CONTRACTS);
};

export const getContract = async (id) => {
  return await instance.get(`${FETCH_CONTRACT}/${id}`);
};
