"use strict";

import Sequelize, { Model } from "sequelize";

class MedicalRecord extends Model {
  static init(sequelize) {
    super.init(
      {
        date_opening: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, {
      foreignKey: "client_id",
      as: "client",
    });
  }
}

export default MedicalRecord;
