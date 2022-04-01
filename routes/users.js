const app = require("express").Router();
const { User } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = app;
