import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Users from "./Users";
import UsersWithoutTasks from "./UsersWithoutTasks";
import Tasks from "./Tasks";
import UserTasks from "./UserTasks";

class App extends Component {
  //dont need constructor and super bc theres no state or binding in this component
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/without-tasks" component={UsersWithoutTasks} />
          <Route path="/users/:id" component={UserTasks} />
          <Route path="/tasks" component={Tasks} />
        </Switch>
      </div>
    ); // exact is needed above when there's other options behind the / or /users/
    // Switch is needed so that multiple components don't show on the page at the same time, but are still in nav bar
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
