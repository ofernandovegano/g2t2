'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("professions", [
      {
        name: "Cardiologista",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Clínico Geral",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Oftalmologista",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("professions")
  }
};
