const { FLOAT, DATEONLY, BOOLEAN, INTEGER } = require("sequelize");
const connection = require(".././database/connection");
const { Category } = require("./category");
const { Company } = require("./companies");
const { Trainee } = require("./trainee");

const Contract = connection.define(
  "contract",
  {
    traineesId: {
      type: INTEGER,
      references: {
        model: Trainee,
        key: "id",
      },
    },
    categoryId: {
      type: INTEGER,
      references: {
        model: Category,
        key: "id",
      },
    },
    companyId: {
      type: INTEGER,
      references: {
        model: Company,
        key: "id",
      },
    },
    startValidity: DATEONLY,
    endValidity: DATEONLY,
    status: BOOLEAN,
    remuneration: FLOAT,
    extra: FLOAT,
  },
  {
    underscored: true,
    paranoid: true,
  }
);

Contract.belongsTo(Category);
Contract.belongsTo(Company);
Contract.belongsTo(Trainee);

module.exports = Contract;
