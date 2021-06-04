const User = require('../models/User');

class UserController{
  async store(req, res) {
    const { login } = await User.create(req.body)
      return res.status(200).json({login})

  }
}

module.exports = new UserController();