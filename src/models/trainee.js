const { connection } = require("../database/connection");
const { STRING, DATE, BOOLEAN } = require("sequelize");

const trainee = connection.define(
  "trainee",
  {
    name: STRING,
    created_at: DATE,
    updated_at: DATE,
    email: {
      validate: {
        isEmail: {
          msg: "O campo enviado deve ser um e-mail válido!",
        },
      },
    },
    rg: {
      type: STRING,
      validate: {
        min: {
          args: 7,
          msg: "O campo RG deve ter no mínimo 7 caracteres!",
        },
      },
      unique: {
        msg: "Este campo já está na aplicação",
      },
    },
    cpf: {
      type: STRING,
      validate: {
        len: {
          args: [11, 11],
          msg: "O campo CPF deve ter exatamente 11 caracteres!",
        },
      },
      unique: {
        msg: "Este campo já está na aplicação",
      },
    },
    primary_phone_contact: STRING,
    secondary_phone_contact: {
      type: STRING,
      allowNull: true,
    },
    date_birth: DATE,
    father_name: STRING,
    mother_name: STRING,
    have_special_needs: BOOLEAN,
  },
  { underscored: true }
);

module.exports = { trainee };
