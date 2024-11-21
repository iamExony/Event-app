import React from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/api/auth";
import { LOGIN_KEY } from "../keys";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function useLogin() {
  return useMutation({
    mutationFn: login,
    mutationKey: LOGIN_KEY,
    onSuccess: (data) => {
      console.log({ data: data?.data?.data });
      toast.success("User successfully logged in");

      const token = data.data.data.tokens.access_token;
      localStorage.setItem("token", token);

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 24);
      localStorage.setItem("expiration", expiration.toISOString());

      localStorage.setItem("profile", JSON.stringify(data?.data?.data));
      // window.dispatchEvent(new Event("storage"));
      

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
        "Failed to log in. Please try again.";
      toast.error(errorMessage);
    },
  });
}
