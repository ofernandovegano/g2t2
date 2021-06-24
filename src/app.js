import express from 'express';
import cors from 'cors';
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
    this.server.use(cors());
  }
  
  middleware() {
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
