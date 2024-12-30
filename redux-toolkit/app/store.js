const { configureStore } = require("@reduxjs/toolkit");
const { reducer: cakeReducer } = require("../features/Cake/cakeSlice");
const {
  reducer: iceCreamReducer,
} = require("../features/IceCream/IceCreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});

module.exports = store;
