const { Task, User, sequelize } = require("./db");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json()); // looks at data and converts it to an obj

// allows users to see stylesheet, also referenced in index.html
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

//if using app.use, need a middleware like ("express").Router in the users or tasks routes file
app.use("/api/tasks", require("./routes/tasks"));
app.use("/api/users", require("./routes/users"));

module.exports = app;
