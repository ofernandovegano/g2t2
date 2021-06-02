import { Router } from 'express';
const path = require('path');

const routes = new Router();

// Conection between backend and frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
};



export default routes;
