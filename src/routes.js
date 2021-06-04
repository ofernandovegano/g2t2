const express  = require ('express');
const router = express.Router();

const app = require ('./app')
const path = require ('path');


// Conection between backend and frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  })
};

module.exports = router;
