const { Task, User, sequelize } = require("./db");
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const init = async () => {
  console.log("calling init");
  await sequelize.sync({ force: true });
};

init();
