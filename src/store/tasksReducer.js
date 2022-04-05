const tasksReducer = (state = [], action) => {
  if (action.type === "SET_TASKS") {
    return action.tasks;
  }
  if (action.type === "DELETE_TASK") {
    state = state.filter((task) => task.id !== action.id);
  }
  return state;
};

export default tasksReducer;
