'use strict';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize){
    super.init(
      {
        login: {
          type:Sequelize.STRING,
          validate: {
            len:{
              args:[5,20],
              msg: "O campo login deve ter entre 5 e 20 caracteres."
            }
          }
        },
        name:{
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              msg: "O campo nome não pode ser vazio."
            }
          }
        },
        password: {
          type: Sequelize.VIRTUAL,
          validate: {
            notEmpty: {
              msg: "O campo senha não pode ser vazio."
            }
          }
        },
        password_hash: Sequelize.STRING,
      },
      {
        sequelize
      }
    )

    this.addHook('beforeSave', async user => {
      if (user.password){
        user.password_hash = await bcrypt.hash(user.password, 15)
      }
    })

    return this;
}

  checkPassword(password){
    return bcrypt.compare(password, this.password_hash)
  }
};

export default User;
