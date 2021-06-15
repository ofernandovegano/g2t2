"use strict";

import Sequelize, { Model } from "sequelize";

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo cpf não pode ser vazio."
            },
            notNull: {
              msg: "O campo cpf não pode ser vazio."
            }
          }
        },
        name: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo nome não pode ser vazio."
            },
            notNull: {
              msg: "O campo nome não pode ser vazio."
            }
          }
        },
        phone: Sequelize.STRING,
        mobile: Sequelize.STRING,
        email: {
          type:Sequelize.STRING,
          allowNull: false,
          validate:{
            notEmpty: {
              msg: "O campo email não pode ser vazio."
            },
            notNull: {
              msg: "O campo email não pode ser vazio."
            }
          }
        },
        type_blood: {
          type: Sequelize.ENUM("A+",
          "A-",
          "B+",
          "B-",
          "O+",
          "O-",
          "AB+",
          "AB-"),
          validate:{
            isIn:{
              args:[["A+",
              "A-",
              "B+",
              "B-",
              "O+",
              "O-",
              "AB+",
              "AB-"]],
              msg: "Tipos sanguíneos válidos: A+, A-,B+,B-,O+,O-,AB+,AB-"
            } 
          }
        }
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
