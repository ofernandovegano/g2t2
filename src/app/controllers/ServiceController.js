import Service from "../models/Service";
import Client from "../models/Client";
import Specialist from "../models/Specialist";
import MedicalRecord from "../models/MedicalRecord";
// const { Op } = require("sequelize");
import { Op } from "sequelize";

class ServiceController {
  async list(req, res) {
    const services = await Service.findAll({
      include: [{ association: "client" }, { association: "specialist" }],
    });

    return res.json(services);
  }

  async listByDateSchedule(req, res) {
    const { day } = req.body;

    console.log(day);

    const services = await Service.findAll({
      where: {
        date_schedule: {
          [Op.between]: [
            // `2021-06-14T00:00:00.000Z`,
            // `2021-06-14T23:59:59.000Z`,
            `${day}T00:00:00.000Z`,
            `${day}T23:59:59.000Z`,
          ],
        },
      },
      include: [{ association: "client" }, { association: "specialist" }],
    });

    return res.json(services);
  }

  async listBySpecialistAndStatus(req, res) {
    const { specialist_id, status } = req.params;

    console.log(specialist_id, status);

    const services = await Service.findAll({
      include: [
        { association: "client" },
        { association: "specialist" },
        {
          association: "medical_record",
          include: [{ association: "medical_records_history" }],
        },
      ],
      where: {
        [Op.and]: [
          { specialist_id },
          { status_service: status.toUpperCase() },
        ],
      },
    });
    
    return res.json(services);
  }

  async get(req, res) {
    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(400).json({ error: "Atendimento não encontrado" });
    }

    return res.json(service);
  }

  async create(req, res) {
    const {
      date_schedule,
      date_service,
      time_service,
      price,
      status_service,
      client_id,
      specialist_id,
    } = req.body;

    const client = await Client.findByPk(client_id);

    if (!client) {
      return res
        .status(400)
        .json({ erro: "Cliente inválido, tente novamente" });
    }

    const specialist = await Specialist.findByPk(specialist_id);

    if (!specialist) {
      return res
        .status(400)
        .json({ erro: "Especialista inválido, tente novamente" });
    }
    try {
      const service = await Service.create({
        date_schedule,
        date_service,
        time_service,
        price,
        status_service,
        client_id,
        specialist_id,
      });

      return res.status(201).json(service);
    } catch (error) {
      return res.status(400).json({
        erro: error.errors.map((erro) => erro.message) || error.message,
      });
    }
  }

  async update(req, res) {
    const {
      date_schedule,
      date_service,
      time_service,
      price,
      status_service,
      client_id,
      specialist_id,
    } = req.body;

    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(400).json({ erro: "Atendimento não encontrado" });
    }

    if (client_id) {
      const client = await Client.findByPk(client_id);

      if (!client) {
        return res
          .status(400)
          .json({ erro: "Cliente inválido, tente novamente" });
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
    try {
      (service.date_schedule = date_schedule),
        (service.date_service = date_service),
        (service.time_service = time_service),
        (service.price = price),
        (service.status_service = status_service),
        (service.client_id = client_id),
        (service.specialist_id = specialist_id),
        await service.save();

      return res.status(200).json(service);
    } catch (error) {
      return res.status(400).json({
        erro: error.errors.map((erro) => erro.message) || error.message,
      });
    }
  }

  async delete(req, res) {
    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(400).json({ error: "Atendimento não encontrado" });
    }

    await service.destroy();

    return res.status(200).send();
  }
}

export default new ServiceController();
