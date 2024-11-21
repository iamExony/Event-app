/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck]
import { useQuery } from "@tanstack/react-query";
import { FETCH_PROSPECTS_KEY } from "../keys";
import { getProspect } from "../../services/api/prospects";
// import { getProspect } from "../../dashboard/eventSource/prospects/utils/prospectApi";

export const useFetchProspect = (id ) => {
  return useQuery({
    queryKey: [FETCH_PROSPECTS_KEY],
    queryFn: () => getProspect(id),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
