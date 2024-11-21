import { useQuery } from "@tanstack/react-query";
import { FETCH_ALL_CONTRACT_KEY } from "../keys";
import { getAllContract } from "../../services/api/contract";

export const useFetchAllContracts = () => {
  return useQuery({
    queryKey: [FETCH_ALL_CONTRACT_KEY],
    queryFn: () => getAllContract(),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
