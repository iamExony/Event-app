// import { configureStore } from "@reduxjs/toolkit";
// import prospectReducer from "../../dashboard/eventSource/prospects/utils/prospectSlice";
// import auth

// const store = configureStore({
//   reducer: {
//     prospect: prospectReducer,
//     auth: authReducer,
//   },
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;