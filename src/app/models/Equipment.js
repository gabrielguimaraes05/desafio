import Sequelize, { Model } from 'sequelize';

class Equipment extends Model {
  static init(sequelize) {
    super.init(
      {
        model: Sequelize.STRING,
        category: Sequelize.STRING,
        ppm: Sequelize.INTEGER,
        wifi: Sequelize.BOOLEAN,
        consumption: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Equipment;
