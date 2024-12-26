const redux = require("redux");
const applyMiddleware=redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger=reduxLogger.createLogger();

const bindActionCreaters = redux.bindActionCreators;
const combineReducers=redux.combineReducers;

const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  //action creater
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
} //action creater

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   numberofCakes: 10,
//   numberofIceCreams: 20, //   anotherProperty:0,
// };

const initialCakeState={
  numberofCakes: 10,
}

const initialIceCreamState={
  numberofIceCreams: 20,
}


const Cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numberofCakes: state.numberofCakes - 1 };
    case CAKE_RESTOCKED:
      return { ...state, numberofCakes: state.numberofCakes + action.payload };
    default:
      return state;
  }
};

const IceCreamreducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numberofIceCreams: state.numberofIceCreams - 1 };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberofIceCreams: state.numberofIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer=combineReducers({
  cakes:Cakereducer,
  iceCream:IceCreamreducer
})
const store = createStore(rootReducer,applyMiddleware(logger)); //responsibility 1


const unsubscribe = store.subscribe(() =>{}); //responsibility 4 works like useeffect hook
/*
Another method of calling the actions  this is Method 1
store.dispatch(orderCake()) //responsibility 3
store.dispatch(orderCake()) 
store.dispatch(orderCake()) 

store.dispatch(restockCake(3))
 */

//Method 2 using bindActionCreators function
const actions = bindActionCreaters(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(3);
actions.restockIceCream(2);

unsubscribe(); //responsibility 5 we will not get further results as we have unsubscribed from the store
