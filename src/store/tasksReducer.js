const tasksReducer = (state = [], action) => {
  if (action.type === "SET_TASKS") {
    return action.tasks;
  }
  if (action.type === "DELETE_TASK") {
    state = state.filter((task) => task.id !== action.id);
  }
  if (action.type === "CREATE_TASK") {
    state = [...state, action.task];
  } // spreading out all tasks already in state, and adding the new one created
  return state;
};

export default tasksReducer;
