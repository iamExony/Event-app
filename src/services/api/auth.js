// import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from "../instance";
import { LOGIN, SIGNUP } from "../api_path";
// Thunk for the login request

export const signup = async (payload) => {
  return await instance.post(SIGNUP, payload);
};

export const login = async (payload) => {
  return await instance.post(LOGIN, payload);
};

// Thunk for the logout request
// export const logout = createAsyncThunk('auth/logout', async () => {
//   await instance.post(`${AUTH_API_URL}/logout`);
//   return {};
// });
