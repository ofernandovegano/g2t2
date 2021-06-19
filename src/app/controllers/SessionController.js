import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController{
  async create(req, res){
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login }})

    if (!user){
      return res.status(401).json({ erro: 'Usuário ou senha errado(a).' })
    }

    if (!(await user.checkPassword(password))){
      return res.status(401).json({ erro: 'Usuário ou senha errado(a).'})
    }

    const {id, name, user_profile} = user

    return res.status(200).json({
      user: {
        id,
        login,
        name,
        user_profile
      },
      token: jwt.sign({ id, login, name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })
  }
}

export default new SessionController();
