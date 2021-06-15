import { Router } from 'express';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();

// controllers
import UserController from './app/controllers/UserController'
import ClientController from "./app/controllers/ClientController";
import SessionController from './app/controllers/SessionController'
import AddressesController from './app/controllers/AddressesController'
import ProfessionController from './app/controllers/ProfessionController'
import SpecialistController from './app/controllers/SpecialistController'
import ServiceController from './app/controllers/ServiceController'
import MedicalRecordController from './app/controllers/MedicalRecordController'
import MedicalRecordHistoryController from './app/controllers/MedicalRecordHistoryController'
import CheckinController from './app/controllers/CheckinController'

routes.get('/', (req, res) => {
  res.send({message: 'Hello World'})
})

// Users
routes.get("/users", UserController.list);
routes.get("/users/:id", UserController.get);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);


// Clients
routes.get("/clients", ClientController.list);
routes.get("/clients/:id", ClientController.get);
routes.post("/clients", ClientController.create);
routes.put("/clients/:id", ClientController.update);
routes.delete("/clients/:id", ClientController.delete);

// Professions
routes.get("/professions", ProfessionController.list);
routes.get("/professions/:id", ProfessionController.get);
routes.post("/professions", ProfessionController.create);
routes.put("/professions/:id", ProfessionController.update);
routes.delete("/professions/:id", ProfessionController.delete);

// Specialists
routes.get("/specialists", SpecialistController.list);
routes.get("/specialists/:id", SpecialistController.listByProfession);
routes.get("/specialists/:id", SpecialistController.get);
routes.post("/specialists", SpecialistController.create);
routes.put("/specialists/:id", SpecialistController.update);
routes.delete("/specialists/:id", SpecialistController.delete);

// Services
routes.get("/services", ServiceController.list);
routes.get("/services/:id", ServiceController.get);
routes.post("/services", ServiceController.create);
routes.put("/services/:id", ServiceController.update);
routes.delete("/services/:id", ServiceController.delete);

// Medical Records
routes.get("/medical-records", MedicalRecordController.list);
routes.get("/medical-records/:id", MedicalRecordController.get);
routes.post("/medical-records", MedicalRecordController.create);
routes.put("/medical-records/:id", MedicalRecordController.update);
routes.delete("/medical-records/:id", MedicalRecordController.delete);

// Medical Records History
routes.get("/medical-records-history", MedicalRecordHistoryController.list);
routes.get("/medical-records-history/:id", MedicalRecordHistoryController.get);
routes.post("/medical-records-history", MedicalRecordHistoryController.create);
routes.put("/medical-records-history/:id", MedicalRecordHistoryController.update);
routes.delete("/medical-records-history/:id", MedicalRecordHistoryController.delete);

// Login
routes.post('/session', SessionController.create)

// mongoo route
routes.get('/checkins/sync', CheckinController.sync)
routes.post('/checkins/new', CheckinController.create)

// authenticated routes

//Addresses
routes.get('/address', AddressesController.list);
routes.get('/address/:id', AddressesController.get);
routes.post('/address', AddressesController.create);
routes.put('/address/:id', AddressesController.update);
routes.delete('/address/:id', AddressesController.delete);
routes.use(authMiddleware);

export default routes;