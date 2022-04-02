//webpack looks in this file

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom"; //allows url to change in browser for client clicks etc
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";
console.log(store.getState());

const root = document.querySelector("#root");
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  root
);
