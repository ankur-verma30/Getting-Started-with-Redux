import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state = initialState) => {
      state.numberOfCakes -= 1;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});


export default cakeSlice.reducer;
export const {ordered,restocked}=cakeSlice.actions;