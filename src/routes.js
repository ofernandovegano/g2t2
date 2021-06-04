const express  = require ('express');
const routes = new express.Router();

const path = require ('path');

const authMiddleware = require('./app/middlewares/auth');

// controllers
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

// Conection between backend and frontend
if (process.env.NODE_ENV === 'production') {
  routes.use(express.static(path.join(__dirname, '../client/build')));

  routes.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  })
};

routes.get('/', (req, res) => {
  res.send({message: 'Hello World'})
})

// Criar usuário
routes.post('/users', UserController.store)

// Logar
routes.post('/session', SessionController.store)

// Abaixo estão as rotas que precisam de autenticação
routes.use(authMiddleware);

module.exports = routes;
