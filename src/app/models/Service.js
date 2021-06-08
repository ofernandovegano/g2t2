import Sequelize, { Model } from "sequelize";

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        date_schedule: Sequelize.DATE,
        date_service: Sequelize.DATE,
        time_service: Sequelize.DATE,
        price: Sequelize.FLOAT,
        status_service: Sequelize.ENUM("AGENDADO", "REALIZADO", "CANCELADO"),
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

    this.belongsTo(models.Specialist, {
      foreignKey: "specialist_id",
      as: "specialist",
    });
  }
}

export default Service;
