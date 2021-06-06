import Address from '../models/Address';

class AddressesController {
  async list(req, res){
    const addresses = await Address.findAll();

    res.status(200).json(addresses);
  }

  async get(req, res){
    const address = await Address.findByPk(req.params.id);

    if (!address) {
      return res.status(400).json({ erro: "Endereço não encontrado" });
    }

    return res.json(address);
  }

  async create(req, res){
  
    try {
      const address = await Address.create(req.body);
  
      return res.status(200).json(address);

    } catch (error) {
      return res.status(400).json({erro: error.errors.map(erro => erro.message) || error.message});
    }

  }
  async update(req, res){
    const addressExist = await Address.findByPk(req.params.id);

    if(!addressExist) return res.status(400).json({erro:"Endereço não encontrado"});

    try {
      await addressExist.update(req.body);
      res.status(200).json({success:"Endereço alterado com sucesso!"});
    } catch (error) {
      return res.status(400).json({erro: error.errors.map(erro => erro.message) || error.message});
    }

  }

  async delete(req, res){
    const addressExist = await Address.findByPk(req.params.id);

    if(!addressExist) return res.status(400).json({erro:"Endereço não encontrado."});

    try {
      await addressExist.destroy();

      res.status(200).json({success: "Endereço deletado com sucesso!"})
    } catch (error) {

      res.status(400).json({erro: error.message})
    }
    

  }
}

export default new AddressesController();