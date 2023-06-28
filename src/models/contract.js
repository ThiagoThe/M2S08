const { FLOAT, DATEONLY, BOOLEAN } = require("sequelize");
const connection = require(".././database/connection");
const Category = require("./category");
const Company = require("./company");
const Trainee = require("./trainee");

const contract = connection.define("contract", {
  startValidity: DATEONLY,
  endValidity: DATEONLY,
  status: BOOLEAN,
  remuneration: FLOAT,
  extra: FLOAT,
});

contract.belongsTo(Category, { foreignKey: "category_id" });
contract.belongsTo(Company, { foreignKey: "company_id" });
contract.belongsTo(Trainee, { foreignKey: "trainee_id" });

module.exports = contract;
