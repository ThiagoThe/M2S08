const connection = require("../database/connection");
const { STRING, DATE } = require("sequelize");

const Companies = connection.define(
  "companies",
  {
    cnpj: {
      type: STRING,
      validate: {
        len: {
          args: [14, 14],
          msg: "Este campo deve ter exatamente 14 caracteres.",
        },
      },
      unique: {
        msg: "Este campo já está na aplicação",
      },
    },
    companyName: STRING,
    contact: STRING,
    cep: STRING,
    adress: STRING,
    neighborhood: STRING,
    city: STRING,
    state: STRING,
    number: STRING,
    complement: STRING,
    rhAnalystName: STRING,
    supervisorName: STRING,
    createdAt: DATE,
    updatedAt: DATE,
  },
  {
    underscored: true, //traduz os campos para snake_case
  }
);

module.exports = { Companies };
