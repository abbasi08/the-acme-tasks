const app = require("express").Router();
const { Task } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    res.send(await Task.findAll());
  } catch (error) {
    next(error);
  }
});
//post route is adding a task to the list
// we're hitting the db, so we make async
app.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Task.create(req.body));
  } catch (error) {
    next(error);
  }
});

app.delete("/:id", async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    await task.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
