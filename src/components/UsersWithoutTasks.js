import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UsersWithoutTasks = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.firstName}</Link>
          </li>
        );
      })}
    </ul>
  );
};
const mapStateToProps = (state) => {
  const usersWithoutTasks = state.users.filter((user) => {
    return state.tasks.filter((task) => task.userId === user.id).length === 0;
  });
  return {
    users: usersWithoutTasks,
  };
};
export default connect(mapStateToProps)(UsersWithoutTasks);
