'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("addresses", [
      {
        zipcode: "96745-000",
        district: "Centro",
        street: "Av. Piratini",
        street_number: "504",
        city: "Charqueadas",
        uf: "RS",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        zipcode: "20560-120",
        district: "Vila Isabel",
        street: "Rua Visconde de Santa Isabel",
        street_number: "375",
        city: "Rio de Janeiro",
        uf: "RJ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        zipcode: "29030-010",
        district: "São Pedro",
        street: "Avenida Beira Mar",
        street_number: "211",
        city: "Vitória",
        uf: "ES",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("addresses")
  }
};
