import NProgress from "nprogress";
import instance from "./instance";
import { ReactElement } from "react";
import useCustomToast from "../hooks/useToast";
import { useCookies } from "react-cookie";



const Interceptor = ({
  component,
  logout,
}) => {
  const [cookies] = useCookies(["token", "isLoggedIn"]);
  const token = cookies.token || "";
  const isLoggedIn = cookies.isLoggedIn || false;
  const { showErrorToast } = useCustomToast();

  // Add request interceptor
  instance.interceptors.request.use((config) => {
    NProgress.start();
    if (isLoggedIn) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  });
  // Add response interceptor
  instance.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {
      NProgress.done();

      console.log({ ZOOL: error });

      // if (error.code === "ERR_NETWORK") {
      //   // handle poor network

      //   return Promise.reject(new Error(error));
      // }

      if (
        error.response &&
        error.response.status === 401 
        // location.pathname !== "/"
      ) {
        // localStorage.setItem("preLoginPath", location.pathname);
        // logout();
        // console.log('ZOOOOO: ', error.response.status, location.pathname, '/');
        // window.location.href = "/";
        return;
      }

      // if (error.response && error.response.status === 500) {
      //   showErrorToast({
      //     message: "Internal server error occurred. Please try again later.",
      //   });
      //   // logout();
      //   return Promise.reject(new Error(error));
      // }

      // if (error.response && error.response.status === 400) {
      //   // showErrorToast({
      //   //   message: "Internal server error occurred. Please try again later.",
      //   // });
      //   // logout();
      //   return Promise.reject(new Error(error));
      // }

      // // logout();
      // return  Promise.reject(error)
      if (error.code === "ERR_NETWORK") {
        // handleSetNetworkError(true);
        showErrorToast({
          message: error.response.data.message,
        });
      }
      // eslint-disable-next-line no-underscore-dangle
      if (
        error?.response?.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        // handleCheckout();
        window.location.href = "/";
      }
      if (
        error?.response?.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest
      ) {
        if (
          error.response.data.message === "invalid token" ||
          error.response.data.message === "jwt expired"
        ) {
          // handleCheckout();
          window.location.href = "/";
          logout();
        }
      }

      if (error?.response?.status === 500) {
        error.response.data.message = "Something went wrong, Please try again!";

        showErrorToast({
          message: "Poor network connection",
        });
      }
      return Promise.reject(error);
    }
  );

  return component;
};

export default Interceptor;
