import { createStore, combineReducers } from "redux";

const tasksReducer = (state = [], action) => {
  return state;
};

const usersReducer = (state = [], action) => {
  return state;
};

const reducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
});

const store = createStore(reducer);

export default store;
