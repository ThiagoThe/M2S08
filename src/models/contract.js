const { Sequelize } = require("sequelize");
const connection = require(".././database/connection");
const Category = require("./category");
const Company = require("./company");
const Trainee = require("./trainee");

const contract = connection.define("contract", {
  start_validity: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  end_validity: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  remuneration: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  extra: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

contract.belongsTo(Category, { foreignKey: "category_id" });
contract.belongsTo(Company, { foreignKey: "company_id" });
contract.belongsTo(Trainee, { foreignKey: "trainee_id" });

module.exports = contract;
