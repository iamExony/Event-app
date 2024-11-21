import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    type: "",
    email: "",
    name: "",
    phone_number: "",

    specifications: []
  
};

const prospectSlice = createSlice({
  name: "prospect",
  initialState,
  reducers: {
    // to add details from each form stage to prospect object
    addToProspect(state, action) {
       state =  {...state, ...action.payload};
    },
  },
});


export const {
    addToProspect,
} = prospectSlice.actions
export default prospectSlice.reducer;

export const getProspect = (state) => state.prospect;


