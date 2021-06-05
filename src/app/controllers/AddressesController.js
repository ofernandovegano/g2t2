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
}

export default new AddressesController();