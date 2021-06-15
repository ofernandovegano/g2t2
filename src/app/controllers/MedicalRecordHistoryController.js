import MedicalRecordHistory from "../models/MedicalRecordHistory";
import MedicalRecord from "../models/MedicalRecord";
import Specialist from "../models/Specialist";

class ServiceController {
  async list(req, res) {
    const medicalRecordsHistory = await MedicalRecordHistory.findAll({
      include: [
        { 
          association: 'medical_record' ,
          include: [{
              association: 'client',
          }]
      },
        { association: "specialist" },
      ],
    });

    return res.json(medicalRecordsHistory);
  }

  async get(req, res) {
    const medicalRecordHistory = await MedicalRecordHistory.findByPk(
      req.params.id, {
        include: [
          { association: "medical_record" },
          { association: "specialist" },
        ],
      }
    );

    if (!medicalRecordHistory) {
      return res
        .status(400)
        .json({ error: "Histórico de prontuário não encontrado" });
    }

    return res.json(medicalRecordHistory);
  }

  async create(req, res) {
    const {
      history_date,
      history_time,
      description,
      medical_record_id,
      specialist_id,
    } = req.body;

    const medicalRecord = await MedicalRecord.findByPk(medical_record_id);

    if (!medicalRecord) {
      return res
        .status(400)
        .json({ erro: "Prontuário inválido, tente novamente" });
    }

    const specialist = await Specialist.findByPk(specialist_id);

    if (!specialist) {
      return res
        .status(400)
        .json({ erro: "Especialista inválido, tente novamente" });
    }

    const medicalRecordHistory = await MedicalRecordHistory.create({
      history_date,
      history_time,
      description,
      medical_record_id,
      specialist_id,
    });

    return res.status(201).json(medicalRecordHistory);
  }

  async update(req, res) {
    const {
      history_date,
      history_time,
      description,
      medical_record_id,
      specialist_id,
    } = req.body;

    const medicalRecordHistory = await MedicalRecordHistory.findByPk(
      req.params.id
    );

    if (!medicalRecordHistory) {
      return res
        .status(400)
        .json({ erro: "Histórico de prontuário não encontrado" });
    }

    if (medical_record_id) {
      const medicalRecord = await MedicalRecord.findByPk(medical_record_id);

      if (!medicalRecord) {
        return res
          .status(400)
          .json({ erro: "Prontuário inválido, tente novamente" });
      }
    }

    if (specialist_id) {
      const specialist = await Specialist.findByPk(specialist_id);

      if (!specialist) {
        return res
          .status(400)
          .json({ erro: "Especialista inválido, tente novamente" });
      }
    }

    (medicalRecordHistory.history_date = history_date),
      (medicalRecordHistory.history_time = history_time),
      (medicalRecordHistory.description = description),
      (medicalRecordHistory.medical_record_id = medical_record_id),
      (medicalRecordHistory.specialist_id = specialist_id),
      await medicalRecordHistory.save();

    return res.status(200).json(medicalRecordHistory);
  }

  async delete(req, res) {
    const medicalRecordHistory = await MedicalRecordHistory.findByPk(
      req.params.id
    );

    if (!medicalRecordHistory) {
      return res
        .status(400)
        .json({ error: "Histórico de prontuário não encontrado" });
    }

    await medicalRecordHistory.destroy();

    return res.status(200).send();
  }
}

export default new ServiceController();
