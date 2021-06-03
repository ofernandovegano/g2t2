"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
const path = require('path');
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const routes = new (0, _express.Router)();

// Conection between backend and frontend
if (process.env.NODE_ENV === 'production') {
  _app2.default.use(express.static(path.join(__dirname, 'client/build')));

  _app2.default.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
};



exports. default = routes;
