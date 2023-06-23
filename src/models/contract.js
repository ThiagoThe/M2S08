const { connection } = require("../database/connection");
const {
  STRING,
  DATE,
  BOOLEAN,
  INTEGER,
  FLOAT,
  DATEONLY,
} = require("sequelize");

const contract = connection.define("contract", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  trainee_id: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: "trainee",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  category_id: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: "category",
      key: id,
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  company_id: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: companies,
      key: id,
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  start_validity: {
    type: DATEONLY,
    allowNull: false,
  },
  end_validity: {
    type: DATEONLY,
    allowNull: false,
  },
  status: {
    type: BOOLEAN,
    allowNull: false,
  },
  remuneration: {
    type: FLOAT,
    allowNull: false,
  },
  extra: {
    type: FLOAT,
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

module.exports = contract;
