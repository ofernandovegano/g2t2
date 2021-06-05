'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('medical_records_history', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      history_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      history_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specialist_id: {
        type: Sequelize.INTEGER,
        references: { model: "specialists", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      medical_record_id: {
        type: Sequelize.INTEGER,
        references: { model: "medical_records", key: "id" },
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('medical_records_history')
  }
};
