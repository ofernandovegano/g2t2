"use strict";
import Sequelize, { Model } from "sequelize";

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: Sequelize.STRING,
        district: Sequelize.STRING,
        street: Sequelize.STRING,
        street_number: Sequelize.STRING,
        city: Sequelize.STRING,
        federative_unit: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    // define association here
  }
}

export default Address;
