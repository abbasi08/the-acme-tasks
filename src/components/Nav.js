import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Nav;
