import Sequelize from 'sequelize';
import { DatabaseError } from 'sequelize';
import databaseconfig from '../config/database'

import User from '../app/models/User';
import Profession from '../app/models/Profession';
import Address from '../app/models/Address';

const models = [User, Profession, Address]

class Database{
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseconfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
