import Sequelize from 'sequelize';
import { DatabaseError } from 'sequelize';
import databaseconfig from '../config/database'

import User from '../app/models/User';
import Profession from '../app/models/Profession';
import Specialist from '../app/models/Specialist';

const models = [User, Profession, Specialist]

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
