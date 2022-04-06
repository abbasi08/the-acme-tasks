import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class CreateTask extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      userId: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.create(this.state.taskName, this.state.userId);
  }
  render() {
    const { taskName, userId } = this.state;
    const { users } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={(ev) => this.setState({ taskName: ev.target.value })}
          placeholder="Type task here"
          value={taskName}
        />
        <select
          value={userId}
          onChange={(ev) => this.setState({ userId: ev.target.value })}
        >
          <option value="">-Choose a User-</option>
          {users.map((user) => {
            return (
              <option value={user.id} key={user.id}>
                {user.firstName}
              </option>
            );
          })}
        </select>
        <button disabled={!taskName || !userId}>Create</button>
      </form>
    );
  }
}
//onChange allows user to type into input field with ev.target.value
// button disabled={ true } will disable the button, disabled={ !taskName } disabled if its empty

const mapDispatchToProps = (dispatch, otherProps) => {
  return {
    create: async (name, userId) => {
      const response = await axios.post("/api/tasks", { name, userId });
      dispatch({ type: "CREATE_TASK", task: response.data });
      otherProps.history.push("/tasks"); //after adding task, redirectes to all tasks page
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(CreateTask);
