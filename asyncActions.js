const redux = require("redux");
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
  return;
  {
    type: FETCH_USERS_REQUESTED;
  }
};

const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEEDED:
      return { ...state, loading: false, users: actions.payload };
    case FETCH_USERS_FAILED:
      return { ...state, loading: false, error: actions.payload };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
