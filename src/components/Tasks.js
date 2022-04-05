import React from "react";
import { connect } from "react-redux";
import axios from "axios";

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
    destroy: (id) => {
      axios.delete(`/api/tasks/${id}`);
      dispatch({ type: "DELETE_TASK", id });
    },
    // make axios call to delete the task   // axios call made from the front end to the server
    // dispatch an action to remove it from the store
  };
};

export default connect((state) => state, mapDispatchToProps)(Tasks);
// (state) => state is replacing mapState to props function seen in other components
