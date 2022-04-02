const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/the_acme_tasks_db"
);

const Task = sequelize.define("task", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// either asociation will establish a foriegn key
Task.belongsTo(User);
User.hasMany(Task); // need hasMany if using 'includes'

module.exports = {
  sequelize,
  Task,
  User,
};
