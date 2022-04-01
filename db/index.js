const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/the_acme_tasks_db"
);

module.exports = {
  sequelize,
};
