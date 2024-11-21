/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck]
import { useQuery } from "@tanstack/react-query";
import {  FETCH_ALL_PROSPECTS_KEY } from './../keys';
import { getAllProspects } from "../../services/api/prospects";

export const useFetchAllProspects = () => {
  return useQuery({
    queryKey: [FETCH_ALL_PROSPECTS_KEY],
    queryFn: () => getAllProspects(),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
