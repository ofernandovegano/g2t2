'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("services", [
      {
        date_schedule: new Date(),
        date_service: new Date(),
        time_service: new Date(),
        price: "150",
        status_service: "Agendado",
        client_id: "2",
        specialist_id: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date_schedule: new Date(),
        date_service: new Date(),
        time_service: new Date(),
        price: "80",
        status_service: "Realizado",
        client_id: "1",
        specialist_id: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("services");
  }
};
