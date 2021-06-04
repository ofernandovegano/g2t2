const Sequelize = require('sequelize');
const { DatabaseError } = require('sequelize');
const databaseconfig = require('../config/database')

const models = [User]

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