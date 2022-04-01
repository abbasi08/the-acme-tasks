const { Task, User, sequelize } = require("./db");
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/api/tasks", async (req, res, next) => {
  try {
    res.send(await Task.findAll());
  } catch (error) {
    next(error);
  }
});

app.get("/api/users", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = app;
