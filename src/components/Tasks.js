import React from "react";
import { connect } from "react-redux";

const Tasks = ({ users, tasks, destroy }) => {
  return (
    <ul>
      {tasks.map((task) => {
        const user = users.find((user) => user.id === task.userId);
        return (
          <li key={task.id}>
            {task.name} <button onClick={() => destroy(task.id)}>x</button>
            <p classID="smallDescribe">
              Assigned to: {user ? user.firstName : ""}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    destroy: (id) => console.log(id),
  };
};

export default connect((state) => state, mapDispatchToProps)(Tasks);
// (state) => state is replacing mapState to props function seen in other components
