import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ users, tasks }) => {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/tasks">({tasks.length}) Tasks </Link>
      <Link to="/users">({users.length}) Users</Link>
    </div>
  );
};

const mapState = (state) => {
  console.log(state);
  return {
    tasks: state.tasks,
    users: state.users,
  };
};

export default connect(mapState)(Nav);
//this is called when there's a change in the redux store
