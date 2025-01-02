import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../Cake/cakeSlice";
const initialState = {
  numberofIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    restocked: (state, action) => {
      state.numberofIceCreams += action.payload;
    },
    ordered: (state = initialState) => {
      state.numberofIceCreams -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberofIceCreams -= 1;
    });
  },
});

export default iceCreamSlice.reducer;
export const { restocked, ordered } = iceCreamSlice.actions;
