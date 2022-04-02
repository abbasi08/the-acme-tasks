import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Users = ({ users, tasks }) => {
  return (
    <ul>
      {users.map((user) => {
        const usersTasks = tasks.filter((task) => task.userId === user.id);
        return (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.firstName} ({usersTasks.length})
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default connect((state) => state)(Users);
// (state) => state is replacing mapState to props function seen in other components
