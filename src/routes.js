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
routes.get("/specialists/:id", SpecialistController.get);
routes.post("/specialists", SpecialistController.create);
routes.put("/specialists/:id", SpecialistController.update);
routes.delete("/specialists/:id", SpecialistController.delete);

// Login
routes.post('/session', SessionController.create)

// authenticated routes
routes.use(authMiddleware);

//Addresses
routes.get('/address', AddressesController.list);
routes.get('/address/:id', AddressesController.get);
routes.post('/address', AddressesController.store);
routes.put('/address/:id', AddressesController.update);
routes.delete('/address/:id', AddressesController.delete);

export default routes;