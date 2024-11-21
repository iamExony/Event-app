import { useQuery } from "@tanstack/react-query";
import { FETCH_ALL_INVOICE_KEY } from "../keys";
import { getAllInvoice } from "../../services/api/invoice";

export const useFetchAllInvoices = () => {
  return useQuery({
    queryKey: [FETCH_ALL_INVOICE_KEY],
    queryFn: () => getAllInvoice(),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
