import Service from "../models/Service";
import Client from "../models/Client";
import Specialist from "../models/Specialist";

class ServiceController {
  async list(req, res) {
    const services = await Service.findAll({
      include: [{ association: "client" }, { association: "specialist" }],
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

    (service.date_schedule = date_schedule),
      (service.date_service = date_service),
      (service.time_service = time_service),
      (service.price = price),
      (service.status_service = status_service),
      (service.client_id = client_id),
      (service.specialist_id = specialist_id),
      await service.save();

    return res.status(200).json(service);
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
