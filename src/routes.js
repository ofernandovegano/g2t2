import { Router } from 'express';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();

// controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProfessionController from './app/controllers/ProfessionController'

routes.get('/', (req, res) => {
  res.send({message: 'Hello World'})
})

// Users
routes.get("/users", UserController.list);
routes.get("/users/:id", UserController.get);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

// Professions
routes.get("/professions", ProfessionController.list);
routes.get("/professions/:id", ProfessionController.get);
routes.post("/professions", ProfessionController.create);
routes.put("/professions/:id", ProfessionController.update);
routes.delete("/professions/:id", ProfessionController.delete);

// Login
routes.post('/session', SessionController.create)

// authenticated routes
routes.use(authMiddleware);

export default routes;