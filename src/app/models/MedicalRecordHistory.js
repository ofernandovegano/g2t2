import Sequelize, { Model } from "sequelize";

class MedicalRecordHistory extends Model {
  static init(sequelize) {
    super.init(
      {
        history_date: Sequelize.DATE,
        history_time: Sequelize.DATE,
        description: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "medical_records_history"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.MedicalRecord, {
      foreignKey: "medical_record_id",
      as: "medical_record",
    });

    this.belongsTo(models.Specialist, {
      foreignKey: "specialist_id",
      as: "specialist",
    });
  }
}

export default MedicalRecordHistory;
