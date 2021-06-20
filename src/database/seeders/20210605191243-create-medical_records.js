'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("medical_records", [
      {
        date_opening: new Date(),
        client_id: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date_opening: new Date(),
        client_id: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date_opening: new Date(),
        client_id: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("medical_records");
  }
};
