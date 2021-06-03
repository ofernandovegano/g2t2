const express = require('express');
const router = express.Router();
const path = require('path');
const app = require('./app');


// Conection between backend and frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  })
};

module.exports = router;
