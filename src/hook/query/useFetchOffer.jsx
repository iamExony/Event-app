import { useQuery } from "@tanstack/react-query";
import { FETCH_OFFER_KEY } from "../keys";
import { getOffer } from "../../services/api/offer";

export const useFetchOffer = (id) => {
  return useQuery({
    queryKey: [FETCH_OFFER_KEY],
    queryFn: () => getOffer(id),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
