const { connection } = require("../database/connection");
const { STRING, DATE, BOOLEAN } = require("sequelize");

const trainee = connection.define("trainee", {
  name: STRING,
  created_at: DATE,
  updated_at: DATE,
  email: STRING,
  rg: STRING,
  cpf: STRING,
  primary_phone_contact: STRING,
  secondary_phone_contact: STRING,
  date_birth: DATE,
  father_name: STRING,
  mother_name: STRING,
  have_special_needs: BOOLEAN,
});

module.exports = trainee;
