import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ users, tasks, usersWithoutTasks }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tasks">{tasks.length} Tasks</Link>
      <Link to="/users">{users.length} Users</Link>
      <Link to="/users/without-tasks">
        {usersWithoutTasks.length} Users Without Tasks
      </Link>
    </nav>
  );
};

const mapState = (state) => {
  const usersWithoutTasks = state.users.filter((user) => {
    return state.tasks.filter((task) => task.userId === user.id).length === 0;
  });
  return {
    tasks: state.tasks,
    users: state.users,
    usersWithoutTasks,
  };
};

export default connect(mapState)(Nav);
//mapState is called when there's a change in the redux store
