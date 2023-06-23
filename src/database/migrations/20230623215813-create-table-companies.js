"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("companies", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cnpj: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      contact: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      adress: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      neighborhood: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING(100),
      },
      rh_analyst_name: {
        type: Sequelize.STRING(100),
      },
      supervisor_name: {
        type: Sequelize.STRING(100),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("companies");
  },
};
