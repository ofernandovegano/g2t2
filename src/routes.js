import { Router } from 'express';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();

// controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

routes.get('/', (req, res) => {
  res.send({message: 'Hello World'})
})

// Criar usuário
routes.post('/users', UserController.store)

// Logar
routes.post('/session', SessionController.store)

// Abaixo estão as rotas que precisam de autenticação
routes.use(authMiddleware);

export default routes;