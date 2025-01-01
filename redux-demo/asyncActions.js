const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").thunk;
const axios = require("axios");

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action types
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// Action creators
const fetchUsersRequested = () => ({
  type: FETCH_USERS_REQUESTED,
});

const fetchUsersSucceeded = (users) => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: users,
});

const fetchUsersFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error,
});

// Reducer
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEEDED:
      return { ...state, loading: false, users: actions.payload, error: "" };
    case FETCH_USERS_FAILED:
      return { ...state, loading: false, error: actions.payload };
    default:
      return state;
  }
};

// Async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested());
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userID = response.data.map((user) => user.id);
        dispatch(fetchUsersSucceeded(userID));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

// Create the Redux store
const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware));

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch the async action
store.dispatch(fetchUsers());
