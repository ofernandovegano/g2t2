require('dotenv').config()
import Sequelize from "sequelize";
import mongoose from 'mongoose'
import { DatabaseError } from "sequelize";
import databaseconfig from "../config/database";
import pusher from '../config/pusher'

import User from "../app/models/User";
import Profession from "../app/models/Profession";
import Specialist from "../app/models/Specialist";
import Client from "../app/models/Client";
import Address from "../app/models/Address";
import Service from "../app/models/Service";
import MedicalRecord from "../app/models/MedicalRecord";
import MedicalRecordHistory from "../app/models/MedicalRecordHistory";

const models = [
  User,
  Profession,
  Specialist,
  Client,
  Address,
  Service,
  MedicalRecord,
  MedicalRecordHistory,
];
class Database {
  constructor() {
    this.init();
    this.associate();
    this.mongo();
    this.pusher();
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

  mongo() {
    this.mongoConnection = mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@service-checkin.buh92.mongodb.net/g2t2?retryWrites=true&w=majority`,
      { 
        useCreateIndex: true,
        useNewUrlParser: true, 
        useUnifiedTopology: true
      }
    )
  }

  pusher() {
    const db = mongoose.connection;

    db.once("open", () => {
      console.log("DB connected");

      const checkinCollection = db.collection("checkins");
      const changeStream = checkinCollection.watch();

      changeStream.on('change', (change) => {
        console.log(change);

        if (change.operationType === 'insert') {
          const checkinDetails = change.fullDocument;
          pusher.trigger('checkins', 'inserted',
            {
              patient: checkinDetails.patient,
              appointment: checkinDetails.appointment,
              specialist: checkinDetails.specialist
            }
          );
        } else {
          console.log('Error triggering Pusher')
        }
      });
    });
  }
}

export default new Database();
