import Profession from "../models/Profession";

class ProfessionController {
  async list(req, res) {
    const professions = await Profession.findAll();

    return res.json(professions);
  }

  async get(req, res) {
    const profession = await Profession.findByPk(req.params.id);

    if (!profession) {
      return res.status(400).json({ error: "Profissão não encontrada" });
    }

    return res.json(profession);
  }

  async create(req, res) {
    const { name } = req.body;
    try {
      const profession = await Profession.create({ name });
  
      return res.status(201).json(profession);
    } catch (error) {
      return res.status(400).json({erro: error.errors.map(erro => erro.message) || error.message});
    }

  }

  async update(req, res) {
    const profession = await Profession.findByPk(req.params.id);

    if (!profession) {
      return res.status(400).json({ erro: "Profissão não encontrada" });
    }

    profession.name = req.body.name;

    await profession.save();

    return res.status(200).json(profession);
  }

  async delete(req, res) {
    const profession = await Profession.findByPk(req.params.id);
    try {
      if (!profession) {
        return res.status(400).json({ error: "Profissão não encontrada" });
      }
  
      await profession.destroy();
  
      return res.status(200).send();
    } catch (error) {
      
      return res.status(400).json({erro: error.message});
    }
  }
}

export default new ProfessionController();
