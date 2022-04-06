import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import tasksReducer from "./tasksReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
