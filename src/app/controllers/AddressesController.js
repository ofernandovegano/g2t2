import Address from '../models/Address';


class AddressesController {
  async list(req, res){
    const addresses = await Address.findAll();

    res.status(200).json(addresses);
  }
}

export default new AddressesController();