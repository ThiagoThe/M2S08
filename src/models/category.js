const { connection } = require("../database/connection");
const { STRING, DATE, INTEGER } = require("sequelize");

const category = connection.define("category", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: STRING(100),
    allowNull: false,
  },
  created_at: {
    type: DATE,
    allowNull: false,
  },
  updated_at: {
    type: DATE,
    allowNull: false,
  },
});

module.exports = { category };
