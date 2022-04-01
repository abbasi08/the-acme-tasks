const app = require("./app");
const { Task, User, sequelize } = require("./db");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const init = async () => {
  console.log("Initializing database..");
  await sequelize.sync({ force: true });

  const [hannah, lauren, joshua, prof] = await Promise.all([
    User.create({ firstName: "hannah" }),
    User.create({ firstName: "lauren" }),
    User.create({ firstName: "joshua" }),
    User.create({ firstName: "prof" }),
  ]);

  await Promise.all([
    Task.create({ name: "answer questions", userId: prof.id }),
    Task.create({ name: "go shopping", userId: hannah.id }),
    Task.create({ name: "email mentors", userId: prof.id }),
    Task.create({ name: "dance all night", userId: lauren.id }),
    Task.create({ name: "do all the hw", userId: joshua.id }),
    Task.create({ name: "make coffee", userId: prof.id }),
  ]);
};

init();

// cant export from server. Server depends on express (app.js)
