const connection = require("../database/connection");
const { STRING, DATE, INTEGER } = require("sequelize");
const { Trainee } = require("./trainee");

const User = connection.define(
  "user",
  {
    traineeId: {
      type: INTEGER,
      references: {
        model: Trainee,
        key: "id",
      },
    },
    name: STRING,
    email: {
      type: STRING,
      validade: {
        isEmail: { msg: "Email inválido" },
      },
      unique: { msg: "Email já cadastrado" },
    },
    password: {
      type: STRING,
      validade: {
        len: { args: [6, 12], msg: "Senha deve ter entre 6 e 12 caracteres" },
      },
    },
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE,
  },
  {
    underscored: true,
    paranoid: true,
  }
);
User.belongsTo(Trainee);

module.exports = { User };
