import { useQuery } from "@tanstack/react-query";
import { FETCH_INVOICE_KEY } from "../keys";
import { getInvoice } from "../../services/api/invoice";

export const useFetchInvoice = (id) => {
  return useQuery({
    queryKey: [FETCH_INVOICE_KEY],
    queryFn: () => getInvoice(id),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
