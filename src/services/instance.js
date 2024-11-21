/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL || "https://e-vents.onrender.com",
  timeout: 36000,
});

instance.interceptors.request.use(
  (config) => {
    const profile = localStorage.getItem("profile");

    console.log("Profile from localStorage:", profile);

    if (profile) {
      const parsedProfile = JSON.parse(profile);
      const token = parsedProfile.tokens?.access_token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Server error:", error.response.status);
    } else if (error.request) {
      // No response received
      console.error("Network error: No response received");
    } else {
      // Something else happened
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
