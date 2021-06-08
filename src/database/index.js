import Sequelize from "sequelize";
import { DatabaseError } from "sequelize";
import databaseconfig from "../config/database";

import User from "../app/models/User";
import Profession from "../app/models/Profession";
import Specialist from "../app/models/Specialist";
import Client from "../app/models/Client";
import Address from "../app/models/Address";
import MedicalRecord from "../app/models/MedicalRecord";

const models = [User, Profession, Specialist, Client, Address, MedicalRecord];
class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseconfig);
    models.map((model) => model.init(this.connection));
  }

  associate() {
    models.map((model) => {
      if (typeof model.associate === "function") {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
