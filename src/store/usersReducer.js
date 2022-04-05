const usersReducer = (state = [], action) => {
  if (action.type === "SET_USERS") {
    return action.users;
  }
  return state;
};

export default usersReducer;
