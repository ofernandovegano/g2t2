"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("services", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      date_schedule: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      date_service: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time_service: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      status_service: {
        type: Sequelize.ENUM(
          "AGENDADO",
          "AGUARDANDO ATENDIMENTO",
          "REALIZADO",
          "CANCELADO"
        ),
        allowNull: false,
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: { model: "clients", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      specialist_id: {
        type: Sequelize.INTEGER,
        references: { model: "specialists", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("services");
  },
};
