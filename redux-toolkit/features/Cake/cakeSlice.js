const { createSlice } = require("@reduxjs/toolkit");

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

module.exports = {
  reducer: cakeSlice.reducer,
  cakeActions: cakeSlice.actions,
};
