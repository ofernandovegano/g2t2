import express from 'express';
const cors = require('cors');
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
    this.server.use(cors({
      origin: 'https://g2t2-front.herokuapp.com/sessions'
    }));
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
