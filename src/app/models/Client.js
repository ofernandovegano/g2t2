"use strict";

import Sequelize, { Model } from "sequelize";

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        mobile: Sequelize.STRING,
        email: Sequelize.STRING,
        type_blood: Sequelize.ENUM(
          "A+",
          "A-",
          "B+",
          "B-",
          "O+",
          "O-",
          "AB+",
          "AB-"
        ),
      },
      {
        sequelize,
        modelName: "Client",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Address, {
      foreignKey: "address_id",
      as: "address",
    });
  }
}

export default Client;
