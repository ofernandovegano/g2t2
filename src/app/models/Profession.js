import Sequelize, { Model } from "sequelize";

class Profession extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
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

export default Profession;
