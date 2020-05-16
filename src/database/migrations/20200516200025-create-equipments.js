module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
        unique: true,
      },
      category: {
        type: Sequelize.STRING,
      },
      ppm: {
        type: Sequelize.INTEGER,
      },
      wifi: {
        type: Sequelize.BOOLEAN,
      },
      consumption: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('equipment');
  },
};
