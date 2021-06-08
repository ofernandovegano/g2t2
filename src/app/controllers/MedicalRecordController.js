import MedicalRecord from "../models/MedicalRecord";
import Client from "../models/Client";

class MedicalRecordController {
  async list(req, res) {
    const medicalRecords = await MedicalRecord.findAll({
      include: [{ association: "client" }],
    });

    return res.json(medicalRecords);
  }

  async get(req, res) {
    const medicalRecord = await MedicalRecord.findByPk(req.params.id, {
      include: [{ association: "client" }],
    });

    if (!medicalRecord) {
      return res.status(400).json({ error: "Prontuário não encontrado" });
    }

    return res.json(medicalRecord);
  }

  async create(req, res) {
    const { date_opening, client_id } = req.body;

    const client = await Client.findByPk(client_id);

    if (!client) {
      return res
        .status(400)
        .json({ erro: "Cliente inválido, tente novamente" });
    }

    const medicalRecord = await MedicalRecord.create({
      date_opening,
      client_id,
    });

    return res.status(201).json(medicalRecord);
  }

  async update(req, res) {
    const { date_opening, client_id } = req.body;

    const medicalRecord = await MedicalRecord.findByPk(req.params.id);

    if (!medicalRecord) {
      return res.status(400).json({ error: "Prontuário não encontrado" });
    }
    if (client_id) {
      const client = await Client.findByPk(client_id);

      if (!client) {
        return res.status(400).json({ error: "Cliente não encontrado" });
      }
    }

    medicalRecord.date_opening = date_opening;
    medicalRecord.client_id = client_id;

    await medicalRecord.save();

    return res.status(200).json(medicalRecord);
  }

  async delete(req, res) {
    const medicalRecord = await MedicalRecord.findByPk(req.params.id);

    if (!medicalRecord) {
      return res.status(400).json({ erro: "Prontuário não encontrado" });
    }

    await medicalRecord.destroy();

    return res.status(200).send();
  }
}

export default new MedicalRecordController();
