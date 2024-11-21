/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck]
import { useQuery } from "@tanstack/react-query";
import { FETCH_ALL_EVENT_KEY } from "../keys";
import { getAllEvent } from "../../services/api/event";

export const useFetchAllEvent = () => {
  return useQuery({
    queryKey: [FETCH_ALL_EVENT_KEY],
    queryFn: () => getAllEvent(),
    enabled: true,
    // initialData: [],
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
};
