const { connection } = require("../database/connection");
const { STRING, DATE } = require("sequelize");

const category = connection.define("category", {
  name: STRING,
  created_at: DATE,
  updated_at: DATE,
});

module.exports = { category };
