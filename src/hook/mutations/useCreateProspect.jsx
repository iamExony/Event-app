import React from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/api/auth";
import { CREATE_PROSPECT_KEY } from "../keys";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createProspect } from "../../services/api/prospects";

export default function useCreateProspect() {
  return useMutation({
    mutationFn: createProspect,
    mutationKey: CREATE_PROSPECT_KEY,
    onSuccess: (data) => {
      console.log({ P:  data })
    },
  });
}
