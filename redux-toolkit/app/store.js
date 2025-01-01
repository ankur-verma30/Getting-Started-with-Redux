const { configureStore } = require("@reduxjs/toolkit");
const { reducer: cakeReducer } = require("../features/Cake/cakeSlice");
const { reducer: iceCreamReducer} = require("../features/IceCream/IceCreamSlice");
// const reduxLogger=require('redux-logger');
const {reducer:userReducer}=require("../features/user/userSlice");


// const logger=reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer,
  },
});

module.exports = store;
