import Sequelize, { Model } from "sequelize";

class Specialist extends Model {
  static init(sequelize) {
    super.init(
      {
        register: Sequelize.STRING,
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        mobile: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Address, {
      foreignKey: "address_id",
      as: "address",
    });
    this.belongsTo(models.Profession, {
      foreignKey: "profession_id",
      as: "profession",
    });
  }
}

export default Specialist;
