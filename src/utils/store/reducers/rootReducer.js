import { combineReducers } from '@reduxjs/toolkit';
// import userReducer from '../services/user/userSlice';
// import productReducer from '../services/product/productSlice';
// import authReducer from '../services/auth/authSlice';
import prospectReducer from "../../../dashboard/eventSource/prospects/utils/prospectSlice";

const rootReducer = combineReducers({
  prospect: prospectReducer,
});

export default rootReducer;