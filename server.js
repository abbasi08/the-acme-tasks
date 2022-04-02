const app = require("./app");
const { Task, User, sequelize } = require("./db");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const init = async () => {
  console.log("Initializing database..");
  await sequelize.sync({ force: true });

  const [hannah, lauren, joshua, prof] = await Promise.all([
    User.create({ firstName: "Hannah" }),
    User.create({ firstName: "Lauren" }),
    User.create({ firstName: "Joshua" }),
    User.create({ firstName: "Prof" }),
  ]);

  await Promise.all([
    Task.create({ name: "Answer questions", userId: prof.id }),
    Task.create({ name: "Go shopping", userId: hannah.id }),
    Task.create({ name: "Email mentors", userId: prof.id }),
    Task.create({ name: "Dance all night", userId: lauren.id }),
    Task.create({ name: "Do all the hw", userId: joshua.id }),
    Task.create({ name: "Make coffee", userId: prof.id }),
  ]);
};

init();

// cant export from server. Server depends on express (app.js)
