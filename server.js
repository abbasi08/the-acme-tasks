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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const init = async () => {
  console.log("Initializing database..");
  await sequelize.sync({ force: true });

  await Promise.all([
    User.create({ firstName: "Hannah" }),
    User.create({ firstName: "Lauren" }),
    User.create({ firstName: "Joshua" }),
  ]);

  await Promise.all([
    Task.create({ name: "answer questions" }),
    Task.create({ name: "go shopping" }),
    Task.create({ name: "email mentors" }),
    Task.create({ name: "do all the hw" }),
  ]);
};

init();
