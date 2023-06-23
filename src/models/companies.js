const { connection } = require("../database/connection");
const { STRING, DATE, INTEGER } = require("sequelize");

const companies = connection.define("companies", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cnpj: {
    type: STRING(15),
    allowNull: false,
    unique: true,
  },
  company_name: {
    type: STRING(100),
    allowNull: false,
  },
  contact: {
    type: STRING(100),
    allowNull: false,
  },
  cep: {
    type: STRING(12),
    allowNull: false,
  },
  adress: {
    type: STRING(100),
    allowNull: false,
  },
  neighborhood: {
    type: STRING(100),
    allowNull: false,
  },
  city: {
    type: STRING(80),
    allowNull: false,
  },
  state: {
    type: STRING(20),
    allowNull: false,
  },
  number: {
    type: STRING(10),
    allowNull: false,
  },
  complement: {
    type: STRING(100),
  },
  rh_analyst_name: {
    type: STRING(100),
  },
  supervisor_name: {
    type: STRING(100),
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

modules.exports = companies;
