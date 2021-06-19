import Sequelize, { Model } from "sequelize";

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        date_schedule: {
          type: Sequelize.DATE,
          allowNull: false,
          isDate: true,
          validate: {
            notEmpty: {
              msg: "O campo data de agendamento não pode ser vazio.",
            },
            notNull: {
              msg: "O campo data de agendamento é obrigatório.",
            },
            isDate: {
              msg: "Data de agendamento inválida",
            },
          },
        },
        date_service: {
          type: Sequelize.DATE,
          allowNull: false,
          isDate: true,
          validate: {
            notEmpty: {
              msg: "O campo data de atendimento não pode ser vazio.",
            },
            notNull: {
              msg: "O campo data de atendimento é obrigatório.",
            },
            isDate: {
              msg: "Data de atendimento inválida",
            },
          },
        },
        time_service: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo hora não pode ser vazio.",
            },
            notNull: {
              msg: "O campo hora é obrigatório.",
            },
          },
        },
        price: Sequelize.FLOAT,
        status_service: {
          type: Sequelize.ENUM(
            "AGENDADO",
            "AGUARDANDO ATENDIMENTO",
            "REALIZADO",
            "CANCELADO"
          ),
          validate: {
            isIn: {
              args: [
                [
                  "AGENDADO",
                  "AGUARDANDO ATENDIMENTO",
                  "REALIZADO",
                  "CANCELADO",
                ],
              ],
              msg: "Status de agendamento válidos: AGENDADO, AGUARDANDO ATENDIMENTO, REALIZADO, CANCELADO",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, {
      foreignKey: "client_id",
      as: "client",
    });

    this.belongsTo(models.Specialist, {
      foreignKey: "specialist_id",
      as: "specialist",
    });
  }
}

export default Service;
