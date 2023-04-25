const Sequelize = require("sequelize");

const sequelize = new Sequelize("job_recruitement_system", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
