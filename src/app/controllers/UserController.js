const User = require('../models/User');

class UserController{
  async store(req, res){
    const { login } = await User.create(req.body)

    return res.status(200).json({name, email})
  }
}

export default new UserController();