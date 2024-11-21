import instance from "../instance";
import { ALL_INVOICE, SINGLE_INVOICE } from "../api_path";

export const getAllInvoice = async () => {
  return await instance.get(ALL_INVOICE);
};

export const getInvoice = async (id) => {
  return await instance.get(`${SINGLE_INVOICE}/${id}`);
};
