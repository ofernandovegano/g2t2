'use strict';
const { Model } = require('sequelize');


class User extends Model {
  static init(sequelize){ 
    super.init({
      login: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'User',
    });
  
    
    return this;
  }
  
  static associate(models) {
  // define association here
  }
};

module.exports = User;
