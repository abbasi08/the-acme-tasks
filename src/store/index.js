import { createStore, combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
});

const store = createStore(reducer);

export default store;
