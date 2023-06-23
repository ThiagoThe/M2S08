const { connection } = require("../database/connection");
const { STRING, DATE, INTEGER, BOOLEAN } = require("sequelize");

const trainee = connection.define("trainee", {
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
  email: {
    type: STRING(100),
    allowNull: false,
  },
  rg: {
    type: STRING(100),
    allowNull: false,
    unique: true,
  },
  cpf: {
    type: STRING(100),
    allowNull: false,
    unique: true,
  },
  primary_phone_contact: {
    type: STRING(20),
    allowNull: false,
  },
  secondary_phone_contact: {
    type: STRING(20),
  },
  date_birth: {
    type: DATE,
    allowNull: false,
  },
  father_name: {
    type: STRING(100),
    allowNull: false,
  },
  mother_name: {
    type: STRING(100),
    allowNull: false,
  },
  have_special_needs: {
    type: BOOLEAN,
    allowNull: false,
  },
  create_at: {
    type: DATE,
    allowNull: false,
  },
  update_at: {
    type: DATE,
    allowNull: false,
  },
});

module.exports = trainee;