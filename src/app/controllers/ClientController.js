import Client from '../models/Client';
import Address from '../models/Address';

class ClientController{

  async list(req, res) {
    const clients = await Client.findAll({
      include: [{ association: "address" }],
    });

    return res.json(clients);
  }

  async get(req, res) {
    const client = await Client.findByPk(req.params.id, {
      include: [{ association: "address" }],
    });

    if (!client) {
      return res.status(400).json({ error: "Cliente não encontrado" });
    }

    return res.json(client);
  }

  async create(req, res) {
    const { cpf, name, phone, mobile, email, type_blood, address_id } = req.body;

    const address = await Address.findByPk(address_id);

    if (!address) {
      return res
        .status(400)
        .json({ erro: "Cliente inválido, endereço não encontrado" });
    }

    const clientExist = await Client.findOne({where: {cpf}});

    if(clientExist) return res.status(400).json({erro: "Cpf já cadastrado, verifique o dado informado."});

    const emailExist = await Client.findOne({where: {email}});

    if(emailExist) return res.status(400).json({erro: "Email já cadastrado."});

    try {
      const client = await Client.create({
        cpf,
        name,
        phone,
        mobile,
        email,
        type_blood,
        address_id,
      });
  
      return res.status(201).json(client);
    } catch (error) {

      return res.status(400).json({erro: error.errors.map(erro => erro.message) || error.message});
      
    }

  }

  async update(req, res) {
    const { cpf, name, phone, mobile, email, type_blood, address_id } =
      req.body;

    const client = await Client.findByPk(req.params.id);

    if (!client) {
      return res.status(400).json({ error: "Cliente não encontrado" });
    }

    if (address_id) {
      const address = await Address.findByPk(address_id);

      if (!address) {
        return res.status(400).json({ error: "Endereço não encontrado" });
      }
    }

    client.cpf = cpf;
    client.name = name;
    client.phone = phone;
    client.mobile = mobile;
    client.email = email;
    client.type_blood = type_blood;
    client.address_id = address_id;

    await client.save();

    return res.status(200).json(client);
  }

  async delete(req, res) {
    const client = await Client.findByPk(req.params.id);

    if (!client) {
      return res.status(400).json({ erro: "Client não encontrado" });
    }

    await client.destroy();

    return res.status(200).send();
  }

}

export default new ClientController();
