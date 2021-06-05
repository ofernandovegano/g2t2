'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("medical_records_history", [
      {
        history_date: new Date(),
        history_time: new Date(),
        description: "Histórico1",
        specialist_id: "2",
        medical_record_id: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        history_date: new Date(),
        history_time: new Date(),
        description: "Histórico2",
        specialist_id: "1",
        medical_record_id: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("medical_records_history");
  }
};
