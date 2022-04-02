import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Nav from "./Nav";

class App extends Component {
  //dont need constructor and super bc theres no state or binding in this component
  componentDidMount() {
    this.props.load();
  }
  render() {
    return <Nav />;
  }
}

//dispatch allows us to send actions to our store
const mapDispatch = (dispatch) => {
  return {
    load: async () => {
      const tasksResponse = await axios.get("/api/tasks");
      dispatch({ type: "SET_TASKS", tasks: tasksResponse.data });

      const usersResponse = await axios.get("/api/users");
      dispatch({ type: "SET_USERS", users: usersResponse.data });
    },
  };
};

// null shows mapdispatches function for state, not props
export default connect(null, mapDispatch)(App);
