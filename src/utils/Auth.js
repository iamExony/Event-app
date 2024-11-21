import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedDurationTime = localStorage.getItem("expiration");
  const storedDurationDate = new Date(storedDurationTime);
  const newDate = new Date();
  const duration = storedDurationDate.getTime() - newDate.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  // console.log(token);

  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const checkAuthLoader = () => {
  const loadToken = getAuthToken();
  if (!loadToken) {
    return redirect("/home");
  }
  return loadToken;
};

export const tokenLoader = () => {
  const loadToken = getAuthToken();
  return loadToken;
};
