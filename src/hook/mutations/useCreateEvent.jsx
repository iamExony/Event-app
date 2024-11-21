import React from "react";
import { useMutation } from "@tanstack/react-query";
import { CREATE_EVENT_KEY } from "../keys";
import "react-toastify/dist/ReactToastify.css";
import { createEvent } from "../../services/api/event";

export default function useCreateEvent() {
  return useMutation({
    mutationFn: createEvent,
    mutationKey: CREATE_EVENT_KEY,
    onSuccess: (data) => {
      console.log({ P: data });
    },
  });
}
