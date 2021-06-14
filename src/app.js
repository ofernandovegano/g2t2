import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

class App{
  constructor(){
    this.server = express();
    this.middleware();
    this.routes()
  }
  
  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({
      extended: true
    }));
    this.server.use((req,res,next) =>{
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      next();
    })
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
