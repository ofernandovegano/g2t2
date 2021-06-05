import Address from '../models/Address';


class AddressesController {
  async list(req, res){
    const addresses = await Address.findAll();

    res.status(200).json(addresses);
  }
  async store(req, res){
    const { zipcode, street, street_number, city, district, uf } = req.body;

    const address = await Address.create({
      zipcode,
      street,
      street_number,
      city,
      district,
      uf
    });

    return res.status(201).json(address);

  }
  async update(req, res){
    const { zipcode, street, street_number, city, district, uf } = req.body;
    const addressExist = await Address.findByPk(req.params.id);

    if(!addressExist) return res.status(400).json({erro:"Endereço não encontrado"});

    await Address.update({
      zipcode,
      street, 
      street_number, 
      city, 
      district, 
      uf
    },{
      where:{
        id:req.params.id
      }
    });

    res.status(200).json({sucess:"Endereço alterado com sucesso!"});
  }
}

export default new AddressesController();