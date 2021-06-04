'use strict';
const { Model } = require('sequelize');


class Address extends Model {
  static init(sequelize){ 
    super.init({
      zip_code: Sequelize.STRING
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

module.exports = Address;