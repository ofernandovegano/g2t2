'use strict';
import Sequelize, { Model } from 'sequelize';



class Address extends Model {
  static init(sequelize){ 
    super.init({
      zipcode:{
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "CEP não pode ser vazio"
          }
        }
      },
      street:{
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Rua não pode ser vazio"
          }
        }
      },
      street_number:{
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Número não pode ser vazio"
          }
        }
      },
      city: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Cidade não pode ser vazio"
          }
        }
      },
      district: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Bairro não pode ser vazio"
          }
        }
      },
      uf: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "UF campo não pode ser vazio"
          }
        }
      },
    },
    {
      sequelize,
      modelName: 'Address',
    });
  
    
    return this;
  }
  
  static associate(models) {
  // define association here
  }
};

export default Address;
