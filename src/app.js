import express from 'express';
import routes from './routes';

require('./database')

class App{
  constructor(){
    this.server = express();
    this.middleware();
    this.routes()
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

const app = new App()
export default app.server;