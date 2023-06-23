"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("trainee", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      primary_phone_contact: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      secondary_phone_contact: {
        type: Sequelize.STRING(20),
      },
      date_birth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      father_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      mother_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      have_special_needs: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("trainee");
  },
};
