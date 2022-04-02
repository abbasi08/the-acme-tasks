import React from "react";
import { connect } from "react-redux";

const Home = ({ tasks, users }) => {
  return (
    <div>
      The average number of tasks per user is {tasks.length / users.length}
    </div>
  );
};

// mapState to GET data from redux store
const mapState = (state) => {
  return {
    users: state.users,
    tasks: state.tasks,
  };
};
export default connect(mapState)(Home);
// connect components to store, rather than importing into the file - store data passed in as parameters
