import User from "../models/User";

class UserController {
  async list(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async get(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    return res.json(user);
  }

  async create(req, res) {
    const { login, name, password } = req.body;

    await User.create({ login, name, password });

    return res.status(201).json(login);
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);
    const { login, name, oldPassword, newPassword } = req.body;

    if (!user) {
      return res.status(400).json({ error: "Usuário ou senha errado(a)." });
    } else if (newPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "Usuário ou senha errado(a)." });
    } else if (newPassword && (await user.checkPassword(newPassword))) {
      return res
        .status(401)
        .json({ error: "Por favor, escolha uma senha diferente da anterior" });
    }

    newPassword ? (user.password = newPassword) : (user.password = oldPassword);

    user.login = login;
    user.name = name;

    await user.save();

    return res.status(200).json({ message: "Dados atualizados com sucesso!" });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    await user.destroy();

    return res.status(200).send();
  }
}

export default new UserController();
