import Specialist from "../models/Specialist";
import Address from "../models/Address";
import Profession from "../models/Profession";

class SpecialistController {
  async list(req, res) {
    const specialists = await Specialist.findAll({
      include: [{ association: "profession" }, { association: "address" }],
    });

    return res.json(specialists);
  }

  async get(req, res) {
    const specialist = await Specialist.findByPk(req.params.id);

    if (!specialist) {
      return res.status(400).json({ error: "Especialista não encontrada" });
    }

    return res.json(specialist);
  }

  async create(req, res) {
    const { register, name, phone, mobile, email, profession_id, address_id } =
      req.body;

    const registerExist = await Specialist.findOne({where: { register }});

    if(registerExist){
      return res
        .status(400)
        .json({ erro: "Registro já cadastrado, verifique o dado informado." });
    }

    const profession = await Profession.findByPk(profession_id);

    if (!profession) {
      return res
        .status(400)
        .json({ erro: "Profissão inválida, tente novamente" });
    }

    const address = await Address.findByPk(address_id);

    if (!address) {
      return res
        .status(400)
        .json({ erro: "Endereço inválido, tente novamente" });
    }

    try {
      const specialist = await Specialist.create({
        register,
        name,
        phone,
        mobile,
        email,
        profession_id,
        address_id,
      });
  
      return res.status(201).json(specialist);
      
    } catch (error) {
      return res.status(400).json({erro: error.errors.map(erro => erro.message) || error.message});
    }
  }

  async update(req, res) {
    const { register, name, phone, mobile, email, profession_id, address_id } =
      req.body;

    const specialist = await Specialist.findByPk(req.params.id);

    if (!specialist) {
      return res.status(400).json({ erro: "Especialista não encontrado" });
    }

    if (profession_id) {
      const profession = await Profession.findByPk(profession_id);

      if (!profession) {
        return res
          .status(400)
          .json({ erro: "Profissão inválida, tente novamente" });
      }
    }

    if (address_id) {
      const address = await Address.findByPk(address_id);

      if (!address) {
        return res
          .status(400)
          .json({ erro: "Endereço inválido, tente novamente" });
      }
    }
    try {
      specialist.register = register,
      specialist.name = name,
      specialist.phone = phone,
      specialist.mobile = mobile,
      specialist.email = email,
      specialist.profession_id = profession_id,
      specialist.address_id = address_id,
        
      await specialist.save();
  
      return res.status(200).json(specialist);

    } catch (error) {
      return res.status(400).json({erro: error.errors.map(erro => erro.message) || error.message});

    }
  }

  async delete(req, res) {
    const specialist = await Specialist.findByPk(req.params.id);

    if (!specialist) {
      return res.status(400).json({ error: "Especialista não encontrado" });
    }
    try {
      await specialist.destroy();

      return res.status(200).send();
    } catch (error) {
      res.status(400).json({erro: error.message})
      
    }
  }
}

export default new SpecialistController();
