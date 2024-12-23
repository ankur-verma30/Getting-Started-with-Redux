console.log("From index file");

const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialState = {
  numberofCakes: 10,
//   anotherProperty:0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {...state, numberofCakes: state.numberofCakes - 1 };
    default:
      return state;
  }
};
