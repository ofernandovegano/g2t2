"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

_app2.default.use(_express2.default.json())
const port = process.env.PORT || 5000
_app2.default.listen(port, error => {
  if (error) throw error;
  console.log('server running on port ' + port);
});