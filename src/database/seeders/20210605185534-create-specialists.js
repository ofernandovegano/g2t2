"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("specialists", [
      {
        register: "326789",
        name: "Arnaldo César Coelho",
        phone: "(31)3242-0028",
        mobile: "(31)98789-0118",
        email: "arnaldo.c.coelho@iclinic.com",
        profession_id: "1",
        address_id: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        register: "999821",
        name: "Oswaldo Cruz",
        phone: "(71)3233-8899",
        mobile: "(71)98111-7707",
        email: "oswaldo.cruz@afya.com.br",
        profession_id: "3",
        address_id: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        register: "212107",
        name: "Machado de Assis",
        phone: "(47)3242-0028",
        mobile: "(47)98789-0118",
        email: "m_assis@unigranrio.com.br",
        profession_id: "1",
        address_id: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("specialists");
  },
};
