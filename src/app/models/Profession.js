import Sequelize, { Model } from "sequelize";

class Profession extends Model {
  static init(sequelize) {
    super.init(
      {
        name:{
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              msg: "O campo nome da profissão não pode ser vazio."
            }
          }
        },
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
