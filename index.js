const redux=require('redux')
console.log("From index file");
const bindActionCreaters=redux.bindActionCreators

const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() { //action creater
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

const initialState = {
  numberofCakes: 10,
//   anotherProperty:0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {...state, numberofCakes: state.numberofCakes - 1 };
      case CAKE_RESTOCKED:
        return {...state, numberofCakes: state.numberofCakes + action.payload };
    default:
      return state;
  }
};

const store=createStore(reducer)  //responsibility 1
console.log('Initial state:', store.getState()) //responsibility 2 

const unsubscribe=store.subscribe(()=> console.log('updated state:', store.getState())) //responsibility 4 works like useeffect hook 
/*
Another method of calling the actions  this is Method 1
store.dispatch(orderCake()) //responsibility 3
store.dispatch(orderCake()) 
store.dispatch(orderCake()) 

store.dispatch(restockCake(3))
 */

//Method 2 using bindActionCreators function
const actions=bindActionCreaters({orderCake,restockCake},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)


unsubscribe();//responsibility 5 we will not get further results as we have unsubscribed from the store




