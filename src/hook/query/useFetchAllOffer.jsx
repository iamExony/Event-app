/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck]
import { useQuery } from "@tanstack/react-query";
import {  FETCH_ALL_OFFER_KEY } from '../keys';
import { getAllOffer } from "../../services/api/offer";

export const useFetchAllOffer = () => {
  return useQuery({
    queryKey: [FETCH_ALL_OFFER_KEY],
    queryFn: () => getAllOffer(),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
