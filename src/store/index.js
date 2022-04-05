import { createStore, combineReducers } from "redux";

const tasksReducer = (state = [], action) => {
  if (action.type === "SET_TASKS") {
    return action.tasks;
  }
  if (action.type === "DELETE_TASK") {
    state = state.filter((task) => task.id !== action.id);
  }
  return state;
};

const usersReducer = (state = [], action) => {
  if (action.type === "SET_USERS") {
    return action.users;
  }
  return state;
};

const reducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
});

const store = createStore(reducer);

export default store;
