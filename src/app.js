import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import routes from './routes';

import './database';

class App{
  constructor(){
    this.server = express();
    this.middleware();
    this.routes()
    this.server.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
  
  middleware() {
    this.server.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
     next();
    });
    this.server.use(express.json());
    this.server.use(express.urlencoded({
      extended: true
    }));
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
