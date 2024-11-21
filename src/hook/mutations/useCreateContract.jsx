import React from "react";
import { useMutation } from "@tanstack/react-query";
import { CREATE_CONTRACT_KEY } from "../keys";
import "react-toastify/dist/ReactToastify.css";
import { createContract } from "../../services/api/contract";
import { toast } from "react-toastify";

export default function useCreateContract() {
  return useMutation({
    mutationFn: createContract,
    mutationKey: CREATE_CONTRACT_KEY,
    onSuccess: (data) => {
      console.log({ P: data });
      // console.log("Contract created successfully");
      // toast.success("Contract created successfully");
    },
  });
}
