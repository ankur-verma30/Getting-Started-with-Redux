const { createSlice } = require("@reduxjs/toolkit");

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
});

module.exports = {
  reducer: iceCreamSlice.reducer,
  iceCreamActions: iceCreamSlice.actions,
};
