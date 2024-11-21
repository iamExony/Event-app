import { useQuery } from "@tanstack/react-query";
import { FETCH_CONTRACT_KEY } from "../keys";
import { getContract } from "../../services/api/contract";

export const useFetchContract = (id) => {
  return useQuery({
    queryKey: [FETCH_CONTRACT_KEY],
    queryFn: () => getContract(id),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
