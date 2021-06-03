import express  from 'express';
const router = express.Router();

import app from './app'
import path from 'path';


// Conection between backend and frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  })
};

export default router;
