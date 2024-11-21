import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/api/auth";
import { SIGNUP_KEY } from "../keys";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function useSignup() {
  return useMutation({
    mutationFn: signup,
    mutationKey: SIGNUP_KEY,
    onSuccess: (data) => {
      console.log({ data: data?.data?.data });
      toast.success("User registered successfully");

      const token = data.data.data.tokens.access_token;
      localStorage.setItem("token", token);

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 24);
      localStorage.setItem("expiration", expiration.toISOString());

      localStorage.setItem("profile", JSON.stringify(data?.data?.data));

      const dataType = data?.data?.data.type;

      setTimeout(() => {
        if (dataType === "host") {
          window.location.href = "/home";
        } else {
          window.location.href = "/";
        }
      }, 500);
    },
    onError: (data) => {
      const errorMessage =
        data?.response?.data?.data?.message ||
        "Failed to sign up. Please try again.";
      toast.error(errorMessage);
    },
  });
}
