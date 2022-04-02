import React from "react";
import { connect } from "react-redux";

const UserTasks = ({ users, tasks, match }) => {
  return (
    <ul>
      {tasks
        .filter((task) => task.userId === match.params.id * 1)
        .map((task) => {
          const user = users.find((user) => user.id === task.userId);
          return (
            <li key={task.id}>
              {task.name}
              <p classID="smallDescribe">
                Assigned to: {user ? user.firstName : ""}
              </p>
            </li>
          );
        })}
    </ul>
  );
};

export default connect((state) => state)(UserTasks);
// (state) => state is replacing mapState to props function seen in other components
