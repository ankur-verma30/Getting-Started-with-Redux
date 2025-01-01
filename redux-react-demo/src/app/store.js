import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/Cake/cakeSlice"
import iceCreamReducer from "../features/IceCream/IceCreamSlice"
import userReducer from "../features/user/userSlice";


// const logger=reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer,
  },
});

export default store;