const express = require('express');
const routes = require('./routes');

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

const app = new App().server

module.exports = app;
