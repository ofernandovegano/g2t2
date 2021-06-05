'use strict';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize){
    super.init(
      {
        login: Sequelize.STRING,
        name: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
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
