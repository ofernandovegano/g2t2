import { Router } from 'express';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();

// controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import AddressesController from './app/controllers/AddressesController'

routes.get('/', (req, res) => {
  res.send({message: 'Hello World'})
})

// Users
routes.get("/users", UserController.list);
routes.get("/users/:id", UserController.get);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.get('/address', AddressesController.list);

// Login
routes.post('/session', SessionController.create)

// authenticated routes
routes.use(authMiddleware);
routes.post('/address', AddressesController.store);
routes.put('/address/:id', AddressesController.update);

export default routes;