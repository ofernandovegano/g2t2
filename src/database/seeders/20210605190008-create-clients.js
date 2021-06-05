'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("clients", [
      {
        cpf: "122.137.786-38",
        name: "João dos Santos",
        phone: "(27) 3268-4726",
        mobile: "(27) 99888-8765",
        email: "joao.santos@gmail.com",
        type_blood: "AB+",
        address_id: "3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cpf: "111.155.767-22",
        name: "Bruce Wayne",
        phone: "(51) 3244-7171",
        mobile: "(51) 98777-8511",
        email: "bruce.batman@gotham.com",
        type_blood: "A-",
        address_id: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        cpf: "133.878.233-13",
        name: "Clark Kent",
        phone: "(21) 3244-7171",
        mobile: "(21) 98777-8511",
        email: "clark.kent@diarioplaneta.com",
        type_blood: "O+",
        address_id: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clients");
  }
};
