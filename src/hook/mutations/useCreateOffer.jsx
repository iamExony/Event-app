import React from "react";
import { useMutation } from "@tanstack/react-query";
import { CREATE_OFFER_KEY } from "../keys";
import "react-toastify/dist/ReactToastify.css";
import { createOffer } from "../../services/api/offer";

export default function useCreateOffer() {
  return useMutation({
    mutationFn: createOffer,
    mutationKey: CREATE_OFFER_KEY,
    onSuccess: (data) => {
      console.log({ P:  data })
    },
  });
}
